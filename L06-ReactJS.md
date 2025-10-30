
# Chapter 06 — Introduction to ReactJS and Project Setup

ReactJS is a JavaScript library designed to build **User Interfaces (UIs)** efficiently and flexibly. Developed by Facebook (now Meta), React introduces the concept of **component-based development**, in which the UI is divided into small, reusable building blocks called *components*.

Traditional web development separates structure (HTML), style (CSS), and behavior (JavaScript). Whenever the displayed data changes, the entire page must be reloaded or manipulated directly via the Document Object Model (DOM). This often leads to complex, hard-to-maintain code. React solves this problem through its **Virtual DOM**, which enables selective and efficient updates to the user interface, resulting in high performance and smoother user experiences.

In essence, React can be thought of as a “LEGO builder” for web interfaces — instead of constructing an entire page as a monolithic structure, developers assemble small, reusable pieces to form a complete application.


## 6.1. Understanding ReactJS

React is not a full-fledged framework like Angular or Vue. It is, rather, a **library focused on the view layer**—responsible solely for rendering UI components. This design allows React to be highly flexible and interoperable with other libraries and tools, such as React Router for navigation and Redux or Zustand for state management.

The fundamental idea behind React is **Component-Based Architecture**. Each page or view can be divided into smaller components — for example, a navigation bar, banner, product list, and footer. Each of these components can be written, maintained, and reused independently.

A conceptual breakdown might look like this:

```
Main Page
 ├── Header
 ├── ProductList
 │    ├── ProductCard
 │    └── ProductCard
 └── Footer
```

This modular approach allows developers to maintain or update only specific parts of the application without affecting others, promoting scalability and code reusability.


## 6.2. Preparing the Development Environment

Before developing with React, three core tools must be installed: **Node.js**, its package manager **npm**, and a **code editor** such as Visual Studio Code (VS Code).

### Installing Node.js and npm

1. Visit [https://nodejs.org](https://nodejs.org).
2. Download the *LTS (Long-Term Support)* version for stability.
3. After installation, verify the setup using the terminal or command prompt:

```
node -v
npm -v
```

If version numbers are displayed, the installation has been successful.



## 6.3. Creating a React Project Using Vite

While React projects were traditionally created using *Create React App (CRA)*, modern developers increasingly prefer **Vite**, a faster and more lightweight build tool.

To create a new project, open the terminal and execute the following commands:

```bash
npm create vite@latest my-first-react-app -- --template react
cd my-first-react-app
npm install
npm run dev
```

The command `npm run dev` launches a local development server, typically accessible at:

```
Local: http://localhost:5173/
```

Opening this URL in a browser displays the default React page, confirming that the environment is correctly configured.


## 6.4. Understanding the Project Structure

A newly created Vite project contains a directory named `src`, which stores all source code files. The most essential files include:

* `main.jsx` — the entry point connecting React to the web page
* `App.jsx` — the main component of the application
* `components/` — a folder to organize smaller, reusable components

An example `main.jsx` file:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

The line `document.getElementById('root')` identifies the HTML element into which React renders its components. This element is defined in `index.html` as `<div id="root"></div>`.


## 6.5. Creating the First Component

In React, a **component** is a function (or class) that returns JSX — a syntax extension that allows HTML-like markup to be written directly within JavaScript.

Example of a simple functional component:

```jsx
function HelloWorld() {
  return <h1>Hello, React!</h1>
}

export default HelloWorld
```

To use this component in `App.jsx`, import and render it as follows:

```jsx
import HelloWorld from './components/HelloWorld'

function App() {
  return (
    <div>
      <HelloWorld />
      <p>Welcome to my first React App!</p>
    </div>
  )
}

export default App
```

Saving the file will automatically refresh the displayed page, reflecting the new content without a full reload — a core benefit of React’s live rendering.



## 6.6. JSX and the Virtual DOM

**JSX (JavaScript XML)** allows developers to combine JavaScript logic with HTML-like syntax in a single code structure.

For example:

```jsx
const name = "Alex"
const message = <h2>Hello, {name}!</h2>
```

The curly braces `{}` allow JavaScript expressions to be embedded within JSX, enabling dynamic content rendering.

Under the hood, JSX is transformed into standard JavaScript using Babel. The previous example is equivalent to:

```jsx
const message = React.createElement("h2", null, `Hello, ${name}!`)
```

React’s **Virtual DOM** further enhances performance by maintaining a lightweight, in-memory representation of the real DOM. When data changes, React compares the Virtual DOM with the actual DOM and updates only the elements that differ, minimizing costly re-rendering operations and improving overall responsiveness.


## 6.7. Practical Exercise: *My First React App*

**Objective:** Apply fundamental React concepts to create a simple web application.

1. Create a new React project using Vite.
2. Define a component named `HelloWorld` that displays “Hello, React World!”.
3. Add an additional component, such as `Header` or `Footer`, and render it within `App.jsx`.
4. Modify text or component properties and observe how React dynamically updates the page without reloading.

This exercise encourages learners to explore how React’s modular structure and live re-rendering capabilities operate in practice.


## 6.8. Summary

By the end of Week 1, learners should be able to:

* Explain the conceptual foundations of ReactJS and its advantages over traditional web development.
* Install and configure a complete React development environment.
* Understand the structure of a Vite-based React project.
* Create and render basic components using JSX and appreciate how the Virtual DOM optimizes rendering efficiency.

This foundational understanding of **component-based thinking** is essential for all subsequent topics. In the next module, we will delve into **Props and State**, exploring how data flows between components and how interactive user interfaces are achieved in React.

