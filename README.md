# AskChatGPT React Component

A sleek, animated React component that lets users ask ChatGPT questions with the current page context. Built with TypeScript and Tailwind CSS.

[![npm version](https://badge.fury.io/js/ask-chatgpt-react.svg)](https://badge.fury.io/js/ask-chatgpt-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🚀 **Instant Integration** - Drop the component anywhere in your React app
- ✨ **Smooth Animations** - Beautiful hover effects and focus transitions
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

### With Custom Styling

```jsx
<AskChatGPT className="my-custom-class" style={{ zIndex: 1000 }} />
```

## Props

| Prop        | Type                                              | Default     | Description            |
| ----------- | ------------------------------------------------- | ----------- | ---------------------- |
| `className` | `string`                                          | `""`        | Additional CSS classes |
| `style`     | `CSSProperties`                                   | `{}`        | Inline styles          |
| `position`  | `"fixed" \| "static" \| "absolute" \| "relative"` | `"fixed"`   | CSS position type      |
| `bottom`    | `string \| number`                                | `"1.25rem"` | Bottom position        |
| `right`     | `string \| number`                                | `undefined` | Right position         |
| `left`      | `string \| number`                                | `"50%"`     | Left position          |
| `top`       | `string \| number`                                | `undefined` | Top position           |

## Behavior

- **Input Expansion**: The input field expands horizontally when focused
- **Smart Scaling**: Hover effects only apply when not focused
- **Auto-centering**: When `left="50%"`, the component auto-centers
- **Page Context**: Automatically includes the current page URL in ChatGPT queries
- **New Tab**: Opens ChatGPT in a new tab/window

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
```

### Blog/Documentation

```jsx
// Add to articles for content-related questions
<AskChatGPT position="static" left="50%" />
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
