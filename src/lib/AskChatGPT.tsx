import React, { useState } from "react";

interface AskChatGPTProps {
  className?: string;
  style?: React.CSSProperties;
  position?: "fixed" | "static" | "absolute" | "relative";
  bottom?: string | number;
  right?: string | number;
  left?: string | number;
  top?: string | number;
}

interface ArrowIconProps {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
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
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Get the current page URL
    const currentUrl = window.location.href;

    // Create the ChatGPT URL with the input as search query and current URL
    const encodedInput = encodeURIComponent(inputValue.trim());
    const encodedCurrentUrl = encodeURIComponent(currentUrl);
    const chatGPTUrl = `https://chatgpt.com/?hints=search&q=${encodedCurrentUrl}%20${encodedInput}`;

    // Open in new tab
    window.open(chatGPTUrl, "_blank");

    // Clear the input
    setInputValue("");
    setIsFocused(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e as React.FormEvent);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const positionStyles: React.CSSProperties = {
    position,
    ...(bottom !== undefined && { bottom }),
    ...(right !== undefined && { right }),
    ...(left !== undefined && { left }),
    ...(top !== undefined && { top }),
  };

  const isDisabled = !inputValue.trim();

  const smoothTransition = "all 400ms cubic-bezier(0.4, 0, 0.2, 1)";

  return (
    <form
      onSubmit={handleSubmit}
      className={`${!isFocused ? "hover:scale-105" : ""} ${className} ${left === "50%" ? "-translate-x-1/2" : ""}`}
      style={{
        ...positionStyles,
        ...style,
        width: isFocused ? "26.25rem" : "13.8125rem",
        height: "5.125rem",
        transformOrigin: position === "fixed" ? "bottom center" : "center",
        transition: smoothTransition,
      }}
    >
      <div className="relative w-full h-full">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Ask ChatGPT"
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
