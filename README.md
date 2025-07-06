# AskChatGPT React Component

A sleek, animated React component that lets users ask ChatGPT questions with the current page context. Built with TypeScript and Tailwind CSS.

[![npm version](https://badge.fury.io/js/ask-chatgpt-react.svg)](https://badge.fury.io/js/ask-chatgpt-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🚀 **Instant Integration** - Drop the component anywhere in your React app
- ✨ **Smooth Animations** - Beautiful hover effects and focus transitions
- 🎯 **Smart Context Menu** - Select text to trigger AI assistance with automatic context
- 🎯 **Flexible Positioning** - Position anywhere on screen with simple props
- 📱 **Mobile Responsive** - Works perfectly on all device sizes
- 🎨 **Customizable** - Built with Tailwind CSS for easy styling
- 🔧 **TypeScript Ready** - Full TypeScript support with proper type definitions

## Installation

```bash
npm install ask-chatgpt-react
```

```bash
yarn add ask-chatgpt-react
```

```bash
pnpm add ask-chatgpt-react
```

## Basic Usage

```jsx
import React from "react";
import { AskChatGPT } from "ask-chatgpt-react";

function App() {
  return (
    <div>
      <h1>My App</h1>

      {/* Default: Fixed position at bottom center */}
      <AskChatGPT />
    </div>
  );
}
```

## Advanced Usage

### Custom Positioning

```jsx
import { AskChatGPT } from 'ask-chatgpt-react';

// Top right corner
<AskChatGPT
  position="fixed"
  top="20px"
  right="20px"
/>

// Bottom left corner
<AskChatGPT
  position="fixed"
  bottom="20px"
  left="20px"
/>

// Center aligned in content
<AskChatGPT
  position="static"
  left="50%"
/>
```

### Context Menu Mode

Enable the smart context menu that appears when users select text:

```jsx
// Basic context menu
<AskChatGPT enableContextMenu={true} />

// Context menu with custom settings
<AskChatGPT
  enableContextMenu={true}
  contextMenuOffset={15}
  selectionMinLength={5}
/>
```

**Context Menu Features:**

- 📝 **Text Selection Detection** - Automatically detects when text is selected
- 🎯 **Smart Positioning** - Appears near the selected text with intelligent placement
- 🎨 **Clean Input Experience** - Shows selected text preview while keeping input field clean
- 📋 **Automatic Context** - Includes selected text context in ChatGPT queries behind the scenes
- 📱 **Touch Support** - Works on mobile devices with touch selection
- ⚡ **Instant Feedback** - Beautiful preview badge shows selected text
- ⌨️ **Keyboard Support** - Press Escape to close context menu

### Custom Prompt Engineering

Take full control over how queries are formatted before sending to ChatGPT:

```jsx
<AskChatGPT
  enableContextMenu={true}
  formatQuery={({ userQuestion, selectedText, currentUrl }) => {
    if (selectedText) {
      return `Role: You are a helpful AI assistant.
      
Context: "${selectedText}"
Question: ${userQuestion}
Source: ${currentUrl}

Please provide a detailed explanation.`;
    }
    return `Question: ${userQuestion}`;
  }}
/>
```

**formatQuery Parameters:**

- `userQuestion` (string) - The user's typed question
- `selectedText` (string | undefined) - Selected text from the page
- `currentUrl` (string) - Current page URL

**Best Practices:**

- Define clear roles and instructions for ChatGPT
- Include relevant context and formatting
- Handle both selected text and regular question scenarios
- Keep prompts concise but descriptive

### With Custom Styling

```jsx
<AskChatGPT className="my-custom-class" style={{ zIndex: 1000 }} />
```

## Props

| Prop                 | Type                                              | Default     | Description                                 |
| -------------------- | ------------------------------------------------- | ----------- | ------------------------------------------- |
| `className`          | `string`                                          | `""`        | Additional CSS classes                      |
| `style`              | `CSSProperties`                                   | `{}`        | Inline styles                               |
| `position`           | `"fixed" \| "static" \| "absolute" \| "relative"` | `"fixed"`   | CSS position type                           |
| `bottom`             | `string \| number`                                | `"1.25rem"` | Bottom position                             |
| `right`              | `string \| number`                                | `undefined` | Right position                              |
| `left`               | `string \| number`                                | `"50%"`     | Left position                               |
| `top`                | `string \| number`                                | `undefined` | Top position                                |
| `enableContextMenu`  | `boolean`                                         | `false`     | Enable text selection context menu          |
| `contextMenuOffset`  | `number`                                          | `10`        | Distance from selected text (in pixels)     |
| `selectionMinLength` | `number`                                          | `3`         | Minimum text length to trigger context menu |
| `formatQuery`        | `function`                                        | `undefined` | Custom prompt engineering function          |

## Behavior

- **Input Expansion**: The input field expands horizontally when focused
- **Smart Scaling**: Hover effects only apply when not focused
- **Auto-centering**: When `left="50%"`, the component auto-centers
- **Page Context**: Automatically includes the current page URL in ChatGPT queries
- **New Tab**: Opens ChatGPT in a new tab/window
- **Keyboard Navigation**: Press Escape to close context menu
- **Custom Formatting**: Use `formatQuery` for advanced prompt engineering

## Styling

The component uses Tailwind CSS classes internally but can be customized:

```css
/* Custom styles for the component */
.my-custom-class {
  /* Your custom styles */
}
```

## Examples

### E-commerce Site

```jsx
// Add to product pages for customer support
<AskChatGPT position="fixed" bottom="20px" right="20px" />

// Context menu for product descriptions
<AskChatGPT enableContextMenu={true} />
```

### Blog/Documentation

```jsx
// Add to articles for content-related questions
<AskChatGPT position="static" left="50%" />

// Context menu for technical articles with shorter trigger
<AskChatGPT
  enableContextMenu={true}
  selectionMinLength={5}
  contextMenuOffset={15}
/>
```

### Educational Content

```jsx
// Context menu for learning materials with custom formatting
<AskChatGPT
  enableContextMenu={true}
  selectionMinLength={10}
  formatQuery={({ userQuestion, selectedText, currentUrl }) => {
    if (selectedText) {
      return `You are an educational AI tutor. Help explain this concept:

"${selectedText}"

Student question: ${userQuestion}

Please provide:
1. A simple explanation
2. Key concepts
3. Real-world examples
4. Further learning suggestions`;
    }
    return userQuestion;
  }}
/>
```

### Code Documentation

```jsx
// Context menu for technical documentation
<AskChatGPT
  enableContextMenu={true}
  formatQuery={({ userQuestion, selectedText, currentUrl }) => {
    if (selectedText) {
      return `You are a technical documentation assistant.

Code/Documentation: "${selectedText}"
Developer question: ${userQuestion}
Source: ${currentUrl}

Please provide clear technical guidance with code examples if relevant.`;
    }
    return `Technical question: ${userQuestion}`;
  }}
/>
```

### Dashboard

```jsx
// Add to admin panels for help
<AskChatGPT position="fixed" top="20px" right="20px" />
```

## Requirements

- React 18.0.0 or higher
- React DOM 18.0.0 or higher

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Burak Sakalli](https://github.com/buraksakalli)

## Links

- [GitHub Repository](https://github.com/buraksakalli/ask-chatgpt-react)
- [NPM Package](https://www.npmjs.com/package/ask-chatgpt-react)
- [Issues](https://github.com/buraksakalli/ask-chatgpt-react/issues)

---

Made with ❤️ by [Burak Sakalli](https://github.com/buraksakalli)
