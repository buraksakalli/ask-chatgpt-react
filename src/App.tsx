import AskChatGPT from "./lib/AskChatGPT";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
            AskChatGPT React Extension
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A sleek, animated React component that lets users ask ChatGPT
            questions with the current page context. Built with TypeScript and
            Tailwind CSS.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 p-6">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2 leading-snug">
              Instant Integration
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Drop the component anywhere in your React app. No configuration
              needed.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 p-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2 leading-snug">
              Smart Context Menu
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Select any text and the component appears with automatic context
              inclusion for precise AI assistance.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 p-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2 leading-snug">
              Smooth Animations
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Beautiful hover effects and focus transitions powered by CSS
              transforms.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 p-6">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2 leading-snug">
              TypeScript Ready
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Built with TypeScript for better development experience and type
              safety.
            </p>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 mb-16">
          <h2 className="text-2xl font-medium text-white mb-8 leading-tight">
            Usage Examples
          </h2>

          <div className="space-y-6">
            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-base font-medium text-white mb-3 leading-snug">
                Default Position (Bottom Center)
              </h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Default position - fixed at bottom center of the screen
              </p>
              <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                <code className="text-emerald-400 text-xs font-mono leading-relaxed">
                  {`<AskChatGPT />`}
                </code>
              </div>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-base font-medium text-white mb-3 leading-snug">
                Center Aligned (In Content)
              </h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Center-aligned component that flows with content
              </p>
              <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                <code className="text-emerald-400 text-xs font-mono leading-relaxed">
                  {`<AskChatGPT position="static" left="50%" />`}
                </code>
              </div>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-base font-medium text-white mb-3 leading-snug">
                Custom Position
              </h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Position anywhere with custom props
              </p>
              <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                <code className="text-emerald-400 text-xs font-mono leading-relaxed">
                  {`<AskChatGPT position="fixed" top="2rem" right="2rem" />`}
                </code>
              </div>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-base font-medium text-white mb-3 leading-snug">
                🎯 Context Menu Mode
              </h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Enable text selection context menu with smart positioning
              </p>
              <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                <code className="text-emerald-400 text-xs font-mono leading-relaxed">
                  {`<AskChatGPT enableContextMenu={true} />`}
                </code>
              </div>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-base font-medium text-white mb-3 leading-snug">
                🔧 Custom Prompt Engineering
              </h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Full control over ChatGPT query formatting with custom logic
              </p>
              <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                <code className="text-emerald-400 text-xs font-mono leading-relaxed">
                  {`<AskChatGPT 
  enableContextMenu={true}
  formatQuery={({ userQuestion, selectedText, currentUrl }) => {
    if (selectedText) {
      return \`Role: You are a helpful AI assistant.
      
Context: "\${selectedText}"
Question: \${userQuestion}
Source: \${currentUrl}

Please provide a detailed explanation.\`;
    }
    return \`Question: \${userQuestion}\`;
  }}
/>`}
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 mb-16">
          <h2 className="text-2xl font-medium text-white mb-4 leading-tight">
            Interactive Demo
          </h2>
          <p className="text-sm text-gray-400 mb-8 leading-relaxed">
            Try typing a question in the input field and pressing Enter or
            clicking the send button. It will open ChatGPT with your question
            and the current page URL.
          </p>

          <div className="relative bg-gray-950/50 rounded-xl p-4 sm:p-8 md:p-12 border border-gray-800 overflow-hidden">
            <div className="absolute top-4 left-4 flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="w-full h-40 flex items-center justify-center">
              <div className="flex items-center justify-center">
                <AskChatGPT position="static" left="0" />
              </div>
            </div>
          </div>
        </div>

        {/* Context Menu Demo */}
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 mb-16">
          <h2 className="text-2xl font-medium text-white mb-4 leading-tight">
            🎯 Context Menu Demo
          </h2>
          <p className="text-sm text-gray-400 mb-8 leading-relaxed">
            Select any text below and watch the magic happen! The AskChatGPT
            component will appear near your selection with smart context.
          </p>

          <div className="bg-gray-950/50 rounded-xl p-6 border border-gray-800 space-y-4">
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="text-white font-medium">
                  Artificial Intelligence
                </span>{" "}
                is transforming how we interact with technology. From{" "}
                <span className="text-blue-400">
                  machine learning algorithms
                </span>{" "}
                that power recommendation systems to
                <span className="text-green-400">
                  natural language processing
                </span>{" "}
                that enables chatbots, AI is everywhere.
              </p>

              <p>
                <span className="text-purple-400">React components</span>{" "}
                provide a declarative way to build user interfaces. They
                encapsulate state and behavior, making applications more{" "}
                <span className="text-yellow-400">
                  maintainable and reusable
                </span>
                . Modern React development leverages hooks for state management
                and effects.
              </p>

              <p>
                <span className="text-cyan-400">TypeScript</span> adds static
                type checking to JavaScript, helping developers catch errors
                early. Combined with{" "}
                <span className="text-pink-400">Tailwind CSS</span>, it creates
                a powerful development experience for building modern,
                type-safe, and beautifully styled applications.
              </p>
            </div>

            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-xs text-gray-400 mb-2">💡 Try this:</p>
              <p className="text-sm text-gray-300">
                1. Select any highlighted text above
                <br />
                2. The AskChatGPT component will appear below your selection
                <br />
                3. Ask questions about the selected content
                <br />
                4. Get AI assistance with automatic context!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-500 text-xs leading-relaxed">
            Made with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>

      {/* Add context menu enabled component */}
      <AskChatGPT enableContextMenu={true} />

      {/* Default bottom-center component */}
      <AskChatGPT />
    </div>
  );
}

export default App;
