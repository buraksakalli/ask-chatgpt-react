import React, { useState, useEffect, useCallback, useRef } from "react";

interface AskChatGPTProps {
  className?: string;
  style?: React.CSSProperties;
  position?: "fixed" | "static" | "absolute" | "relative";
  bottom?: string | number;
  right?: string | number;
  left?: string | number;
  top?: string | number;
  enableContextMenu?: boolean;
  contextMenuOffset?: number;
  selectionMinLength?: number;
  formatQuery?: (params: {
    userQuestion: string;
    selectedText?: string;
    currentUrl: string;
  }) => string;
}

interface ArrowIconProps {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

interface SelectionData {
  text: string;
  rect: DOMRect;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  color = "#363636",
  className = "",
  style = {},
}) => (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M7 14H5V3.5L2 7H0V5.5L5.5 0H6.5L12 5.5V7H11.5H10.5L7 3.5V14Z"
      fill={color}
    />
  </svg>
);

const AskChatGPT: React.FC<AskChatGPTProps> = ({
  className = "",
  style = {},
  position = "fixed",
  bottom = "1.25rem",
  right,
  left = "50%",
  top,
  enableContextMenu = false,
  contextMenuOffset = 10,
  selectionMinLength = 3,
  formatQuery,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selection, setSelection] = useState<SelectionData | null>(null);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const componentRef = useRef<HTMLFormElement>(null);

  const handleSelection = useCallback(() => {
    if (!enableContextMenu) return;

    // Don't interfere if user is actively interacting with the component
    if (isInteracting) {
      return;
    }

    const windowSelection = window.getSelection();
    const selectedText = windowSelection?.toString().trim();

    if (selectedText && selectedText.length >= selectionMinLength) {
      const range = windowSelection?.getRangeAt(0);
      if (range) {
        const rect = range.getBoundingClientRect();
        setSelection({
          text: selectedText,
          rect,
        });
        setShowContextMenu(true);

        // Keep input clean - don't prefill with selected text
        setInputValue("");
      }
    } else {
      // Don't hide if we already have a context menu showing and user is just clicking around
      if (showContextMenu && selection) {
        return;
      }

      setSelection(null);
      setShowContextMenu(false);
      setInputValue("");
    }
  }, [
    enableContextMenu,
    selectionMinLength,
    showContextMenu,
    selection,
    isInteracting,
  ]);

  const handleDocumentClick = useCallback(
    (event: MouseEvent) => {
      if (!enableContextMenu) return;

      if (
        componentRef.current &&
        !componentRef.current.contains(event.target as Node)
      ) {
        const windowSelection = window.getSelection();
        if (!windowSelection?.toString().trim()) {
          setShowContextMenu(false);
          setSelection(null);
          setInputValue("");
        }
      }
    },
    [enableContextMenu]
  );

  useEffect(() => {
    if (enableContextMenu) {
      document.addEventListener("mouseup", handleSelection);
      document.addEventListener("touchend", handleSelection);
      document.addEventListener("click", handleDocumentClick);

      // Add escape key handler
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === "Escape" && showContextMenu) {
          setShowContextMenu(false);
          setSelection(null);
          setInputValue("");
        }
      };

      document.addEventListener("keydown", handleEscapeKey);

      return () => {
        document.removeEventListener("mouseup", handleSelection);
        document.removeEventListener("touchend", handleSelection);
        document.removeEventListener("click", handleDocumentClick);
        document.removeEventListener("keydown", handleEscapeKey);
      };
    }
  }, [
    enableContextMenu,
    handleSelection,
    handleDocumentClick,
    showContextMenu,
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Get the current page URL
    const currentUrl = window.location.href;
    const userQuestion = inputValue.trim();
    const selectedText = selection?.text;

    // Use custom formatQuery if provided, otherwise use default formatting
    let contextualQuery: string;

    if (formatQuery) {
      // Custom prompt engineering by developer
      contextualQuery = formatQuery({
        userQuestion,
        selectedText,
        currentUrl,
      });
    } else {
      // Default formatting
      if (selection) {
        contextualQuery = `Context: "${selectedText}"\n\nQuestion: ${userQuestion}\n\nPage: ${currentUrl}`;
      } else {
        contextualQuery = `${userQuestion}\n\nPage: ${currentUrl}`;
      }
    }

    const encodedQuery = encodeURIComponent(contextualQuery);
    const chatGPTUrl = `https://chatgpt.com/?hints=search&q=${encodedQuery}`;

    // Open in new tab
    window.open(chatGPTUrl, "_blank");

    // Clear the input and hide context menu
    setInputValue("");
    setIsFocused(false);
    setShowContextMenu(false);
    setSelection(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e as React.FormEvent);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsInteracting(true);
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!isContextMenuMode) {
      setIsFocused(false);
    }

    // Clear interaction flag after a short delay
    setTimeout(() => {
      setIsInteracting(false);
    }, 100);
  };

  const handleInputClick = (e: React.MouseEvent) => {
    setIsInteracting(true);
    e.stopPropagation(); // Prevent document click handler

    // Clear interaction flag after a short delay
    setTimeout(() => {
      setIsInteracting(false);
    }, 100);
  };

  // Calculate position based on context menu or default positioning
  const getPositionStyles = (): React.CSSProperties => {
    if (enableContextMenu && showContextMenu && selection) {
      const { rect } = selection;

      // Calculate position with better bounds checking
      const topPosition = rect.bottom + contextMenuOffset;
      const leftPosition = Math.max(
        20, // minimum 20px from left edge
        Math.min(
          rect.left,
          window.innerWidth - 450 // ensure component fits in viewport
        )
      );

      const finalStyles = {
        position: "fixed" as const,
        top: topPosition,
        left: leftPosition,
        zIndex: 10000,
      };

      return finalStyles;
    }

    // Default positioning
    return {
      position,
      ...(bottom !== undefined && { bottom }),
      ...(right !== undefined && { right }),
      ...(left !== undefined && { left }),
      ...(top !== undefined && { top }),
    };
  };

  const isDisabled = !inputValue.trim();
  const smoothTransition = "all 400ms cubic-bezier(0.4, 0, 0.2, 1)";
  const isContextMenuMode = enableContextMenu && showContextMenu;

  // Don't render default component if context menu is enabled but no selection
  if (enableContextMenu && !showContextMenu && position === "fixed") {
    return null;
  }

  return (
    <form
      ref={componentRef}
      onSubmit={handleSubmit}
      className={`${!isFocused ? "hover:scale-105" : ""} ${className} ${left === "50%" && !isContextMenuMode ? "-translate-x-1/2" : ""} ${isContextMenuMode ? "animate-in fade-in duration-200" : ""}`}
      style={{
        ...getPositionStyles(),
        ...style,
        width: isFocused ? "26.25rem" : "13.8125rem",
        height: "5.125rem",
        transformOrigin: isContextMenuMode
          ? "top left"
          : position === "fixed"
            ? "bottom center"
            : "center",
        transition: smoothTransition,
      }}
    >
      <div className="relative w-full h-full">
        {/* Selection indicator */}
        {isContextMenuMode && selection && (
          <div className="absolute top-full left-0 right-0 -mt-2 pl-3 pr-8">
            <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg px-3 py-2 max-w-full">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-xs text-blue-200 font-medium">
                  Selected text:
                </span>
              </div>
              <p className="text-sm text-blue-100 mt-1 truncate max-w-[320px]">
                "
                {selection.text.length > 60
                  ? selection.text.substring(0, 60).trim() + "..."
                  : selection.text}
                "
              </p>
            </div>
          </div>
        )}

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={handleInputClick}
          placeholder={
            isContextMenuMode ? "Ask about the selected text..." : "Ask ChatGPT"
          }
          className={`bg-chat-bg/60 backdrop-blur-xl rounded-3xl shadow-sm px-5 py-3 text-white placeholder-chat-placeholder text-sm font-normal leading-tight tracking-tight outline-none border-none ${
            isFocused ? "w-[23.75rem] bg-chat-bg/90" : "w-[12.5rem]"
          }`}
          style={{
            position: "absolute",
            left: "0.5rem",
            top: "0.875rem",
            height: "3rem",
            resize: "none",
            transition: smoothTransition,
          }}
        />
        <button
          type="submit"
          disabled={isDisabled}
          className="bg-primary-100 text-secondary-100 disabled:bg-primary-44 disabled:text-secondary-60 absolute h-8 w-8 flex-none rounded-full p-0 hover:opacity-70 disabled:hover:opacity-100 flex items-center justify-center"
          style={{
            left: isFocused ? "21.75rem" : "10.5rem",
            top: "1.375rem",
            transition: smoothTransition,
          }}
        >
          <ArrowIcon
            color={isFocused ? "#363636" : "rgba(54, 54, 54, 0.6)"}
            className=""
            style={{
              transition: smoothTransition,
            }}
          />
        </button>
      </div>
    </form>
  );
};

export default AskChatGPT;
