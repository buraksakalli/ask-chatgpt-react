import React from "react";
import { AskChatGPT } from "ask-chatgpt-react";

// Example 1: Basic integration - fixed at bottom right
function BasicExample() {
  return (
    <div>
      <h1>My React App</h1>
      <p>Your app content here...</p>

      {/* AskChatGPT will appear fixed at bottom right */}
      <AskChatGPT />
    </div>
  );
}

// Example 2: Custom positioning
function CustomPositionExample() {
  return (
    <div>
      <h1>My React App</h1>
      <p>Your app content here...</p>

      {/* Fixed at bottom left with custom styling */}
      <AskChatGPT
        bottom="20px"
        left="20px"
        right={undefined}
        className="opacity-75 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}

// Example 3: Inline usage
function InlineExample() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1>My Blog Post</h1>
      <p>Some content here...</p>

      {/* Inline AskChatGPT component */}
      <div className="my-8">
        <h3>Have questions about this content?</h3>
        <AskChatGPT position="static" />
      </div>

      <p>More content here...</p>
    </div>
  );
}

// Example 4: Conditional rendering
function ConditionalExample() {
  const [showChatGPT, setShowChatGPT] = React.useState(false);

  return (
    <div>
      <h1>My React App</h1>
      <button onClick={() => setShowChatGPT(!showChatGPT)}>
        Toggle ChatGPT Widget
      </button>

      {/* Only show AskChatGPT when condition is met */}
      {showChatGPT && <AskChatGPT />}
    </div>
  );
}

export {
  BasicExample,
  CustomPositionExample,
  InlineExample,
  ConditionalExample,
};
