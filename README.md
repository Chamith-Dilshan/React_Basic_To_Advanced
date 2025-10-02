# React Learning Projects (React + TypeScript + Tailwind + Vite)

This repository is a collection of small React projects built to demonstrate various core concepts, from basic component structure to advanced features. It serves as a practical guide and a hands-on learning resource.

## Project Screenshots

### Static Pages
A responsive static page demonstrating layout techniques, background elements, and proper semantic HTML.

| Desktop View | Mobile View |
| :---: | :---: |
| ![Simple Static Page Desktop](./public/static_page/desktop.jpeg) | ![Simple Static Page Mobile](./public/static_page/mobile.jpeg) |

### Travel Journal
A responsive travel journal displaying travel entries with images, dates, and descriptions in a card-based layout.

| Desktop View | Mobile View |
| :---: | :---: |
| ![Travel Journal Desktop](./public/travel_journal/desktop.jpeg) | ![Travel Journal Mobile](./public/travel_journal/mobile.jpeg) |

### Simple Form (React 19)
A contact form demonstrating React 19's new form handling features with various input types and validation.

| Desktop View | Mobile View |
| :---: | :---: |
| ![Simple Form Desktop](./public/simple_form/desktop.jpeg) | ![Simple Form Mobile](./public/simple_form/mobile.jpeg) |

### Chef AI
An AI intregrated app that gives you an recepie depends on a list of ingredients you provided.

| Desktop View | Mobile View |
| :---: | :---: |
| ![Chef AI Desktop](./public/chef_ai/desktop.jpeg) | ![Chef AI Mobile](./public/chef_ai/mobile.jpeg) |

### Meme Generator
A fun meme generator that fetches popular meme templates and allows you to add custom text.

| Desktop View | Mobile View |
| :---: | :---: |
| ![Meme Generator Desktop](./public/meme_generator/desktop.jpeg) | ![Meme Generator Mobile](./public/meme_generator/mobile.jpeg) |

### Tenzies Game
An interactive dice game where players roll until all dice show the same number, with visual effects and accessibility features.

| Desktop View | Mobile View |
| :---: | :---: |
| ![Tenzies Game Desktop](./public/tenzies_game/desktop.jpeg) | ![Tenzies Game Mobile](./public/tenzies_game/mobile.jpeg) |

### Assembly Endgame
A Hangman-style word guessing game with programming language themes, featuring animations and accessibility.

| Desktop View | Mobile View |
| :---: | :---: |
| ![Assembly Endgame Desktop](./public/assembly_endgame/desktop.jpeg) | ![Assembly Endgame Mobile](./public/assembly_endgame/mobile.jpeg) |

## Featured Libraries

### `tailwind-merge`
A utility function for merging Tailwind CSS classes in JS without style conflicts. It's essential for creating reusable components where you want to allow style overrides via props. It intelligently handles conflicting classes (like `bg-red-500` and `bg-blue-500`) by ensuring only the last one is applied.

**Usage:**
```jsx
import { twMerge } from 'tailwind-merge';

// The output will replace same default tailwind classes with provided containerClass styles.
const mergedClasses = twMerge(`bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
        px-6 py-2 rounded-md mt-6 transition-colors`, containerClass); 
```

### `react-icons`
A library that makes it easy to include popular icons in your React projects. It bundles icons from various sets (like Font Awesome, Material Design, etc.) as individual, tree-shakeable React components.

**Usage:**
```jsx
import { FaPhone } from 'react-icons/fa';

const MyComponent = () => <FaPhone />;
```
### `react-markdown`
A library that help to render Markdown as HTML. It's essential for displaying user-generated content or, in this case, the formatted recipe from the AI response.

**Usage:**
```jsx
import ReactMarkdown from 'react-markdown';

const markdown = '# Hello, world!';
const MyComponent = () => <ReactMarkdown>{markdown}</ReactMarkdown>;
```
### `nanoid`
A tiny, secure, URL-friendly unique string ID generator for JavaScript. Perfect for generating unique keys for React components or any situation where you need non-colliding identifiers.

**Usage:**
```jsx
import { nanoid } from 'nanoid';

const id = nanoid(); // "V1StGXR8_Z5jdHi6B-myT"
```

### `gsap` (GreenSock Animation Platform)
A powerful JavaScript animation library that makes it easy to create high-performance animations. It's more performant than CSS animations for complex sequences and provides precise control over timing and easing.

**Usage:**
```jsx
import { gsap } from 'gsap';

gsap.to(element, { x: 100, duration: 2 });
```

### `react-confetti`
A React component that creates a customizable confetti effect for celebrations. It automatically detects window dimensions and provides smooth animations.

**Usage:**
```jsx
import Confetti from 'react-confetti';

const MyComponent = () => (
  <Confetti width={window.innerWidth} height={window.innerHeight} />
);
```

## React Learning Points in This Repo

### 1. Layout and Responsive Design (`StaticPage.tsx`)
- **React Fragments:** Using `Fragment` and `<></>` syntax to avoid unnecessary DOM nodes while grouping elements.
- **Flexbox Layout:** Creating flexible layouts with `flex-col`, `flex-row`, and `flex-1` for proper content distribution.
- **Responsive Design:** Using Tailwind's responsive prefixes (`md:`, `lg:`) for different screen sizes and breakpoints.
- **Absolute Positioning:** Positioning decorative background elements with `absolute` and custom positioning classes.
- **CSS Custom Properties:** Using arbitrary values like `[top:1/10]` and custom spacing for precise control.
- **Semantic HTML:** Proper use of `<nav>`, `<section>`, and heading hierarchy for accessibility and SEO.
- **List Styling:** Customizing list markers with `marker:text-blue-400` and proper spacing techniques.

### 2. Component Creation and Data Rendering (`TravelJournal.tsx`)
- **Component Composition:** Creating reusable child components (`DetailCard`) that accept data through props and can be composed into larger layouts.
- **Array Rendering:** Using the `.map()` method to dynamically render lists of components from data arrays with proper key props.
- **Data Modeling:** Structuring external data sources (simulating database retrieval) with proper TypeScript interfaces for type safety.
- **Destructuring:** Using array and object destructuring (`const [startDate, endDate] = item.dates.split(" - ")`) for cleaner variable assignment.
- **Responsive Images:** Implementing responsive image layouts that adapt from stacked (mobile) to side-by-side (desktop) arrangements.
- **External Links:** Properly implementing external links with `target="_blank"` and `rel="noreferrer"` for security.
- **Flexible Layouts:** Using Flexbox with `flex-shrink-0` and `flex-1` for responsive content distribution.

### 3. Modern Form Handling with React 19 (`SimpleForm.tsx`)
- **React 19 Form Actions:** Using the new `action` attribute with server functions instead of traditional `onSubmit` handlers, eliminating the need for manual form state management.
- **FormData API:** Leveraging the native `FormData` constructor and methods like `.get()` and `.getAll()` to extract form values without controlled components.
- **Uncontrolled Components:** Using `defaultValue` and `defaultChecked` instead of `value` and `onChange` for simpler form handling without useState. From React 19 you can simply use action attribute to submit form data to the server without any page reload or reset - React will take care of all the default behavior that we needed to manage in previous versions. You no longer need to provide a 'method' prop to the form as well. In the old way, you needed to use 'useState' of React and use 'value', 'onChange' props of the input fields and manage form actions and data. This whole setup is called controlled components.
- **Form Input Types:** Implementing various HTML input types (`text`, `email`, `tel`, `textarea`, `radio`, `checkbox`, `select`) with proper accessibility.
- **Fieldsets and Legends:** Using semantic HTML elements for grouping related form controls and improving screen reader navigation.
- **Multiple Values Handling:** Managing checkbox groups where multiple values can be selected using `formData.getAll()`.
- **Form Validation:** Implementing client-side validation with HTML attributes (`required`, `type="email"`) and preparing for server-side validation.
- **Styling Form Elements:** Customizing radio buttons and checkboxes with Tailwind CSS and the `accent-color` utility.
- **Accessibility Best Practices:** Proper labeling, focus management, and semantic HTML structure for form accessibility.

### 4. State, API, and Performance (`ChefAI.tsx`)
- **Ollama Integration:** Requires a running Ollama instance in your local environment with your preferred model configured for recipe generation.
- **HTTP Streaming:** Implementing REST API requests with HTTP streaming (Server-Sent Events style) for real-time data display from the Ollama model, providing unidirectional streaming responses.
- **AbortController & Cleanup:** Using `AbortController` with `useRef` to properly cancel ongoing HTTP streams when components unmount or new requests start, preventing memory leaks and race conditions.
- **State Management:** Managing complex state with `useState` for arrays, loading states, streaming text content, and error handling across multiple related components.
- **useRef for DOM Manipulation:** Using `useRef` to reference DOM elements for auto-scrolling to recipe sections when content is generated.
- **useEffect for Side Effects:** Implementing `useEffect` for cleanup on unmount and triggering smooth scrolling when recipe state changes.
- **Event Handling:** Capturing user interactions with `onSubmit` for forms, `onClick` for buttons, and `onChange` for controlled inputs.
- **Controlled Components:** Using controlled components with `useState`, `value`, and `onChange` for form inputs that require real-time validation and state synchronization.
- **Conditional Rendering:** Dynamically showing UI elements based on application state (recipe button visibility, loading states, error states).
- **Unique Keys:** Generating unique IDs with `crypto.randomUUID()` for efficient React list rendering and proper component identification.
- **Array Methods:** Using `.map()` and `.filter()` for dynamic list rendering and state updates while maintaining immutability.
- **Performance Optimization:** Implementing proper request cancellation and state cleanup to prevent unnecessary re-renders and memory usage.

### 5. API Integration and Data Fetching (`MemeGenerator.tsx`)
- **useEffect with Promises:** Fetching data from the imgflip API using `useEffect` with `.then()/.catch()` instead of async/await, since useEffect callbacks should not return promises but optional cleanup functions.
- **useEffect Cleanup Pattern:** Properly implementing cleanup functions in useEffect to handle component unmounting and prevent memory leaks during API calls.
- **API Data Management:** Storing fetched API data in component state using `useState<ApiMemeProps[]>` for later use without re-fetching on every render.
- **Random Selection Logic:** Implementing `Math.floor(Math.random() * array.length)` to randomly select items from fetched data arrays.
- **Error Handling:** Basic error handling for API requests using `.catch()` with proper console logging for debugging.
- **Controlled Form Components:** Managing form inputs with controlled components using `value`, `onChange`, and `name` attributes for two-way data binding.
- **State Updates with Spread Operator:** Updating specific properties of object state while preserving other properties using the spread operator (`...prevData`).
- **Event Handling:** Handling form submissions with `preventDefault()` and extracting input values using `e.currentTarget.name` and `e.currentTarget.value`.
- **TypeScript Integration:** Defining proper TypeScript interfaces for API response data (`ApiMemeProps`) and component props (`MemeData`).
- **Custom CSS Classes:** Creating reusable utility classes with Tailwind's `@apply` directive for complex styling like text shadows.
- **Absolute Positioning:** Using CSS positioning to overlay text on images at specific locations with proper responsive behavior.

### 6. Interactive Game Logic and Accessibility (`TenziesGame.tsx`)
- **Game State Management:** Managing complex game state with `useState`, including arrays of objects with multiple properties (`id`, `value`, `isHeld`) using proper TypeScript interfaces.
- **Lazy State Initialization:** Using `useState(() => generateNewDiceValues())` to initialize state with a function, preventing unnecessary recalculations on re-renders.
- **Functional State Updates:** Using `setDice(prevDice => ...)` to avoid stale closure issues and ensure state updates work with the current state, especially important for rapid state changes.
- **Array Generation Techniques:** Demonstrating two methods for creating arrays: `Array.from({ length: 10 }, callback)` and `new Array(10).fill(0).map()` for different use cases.
- **Immutable State Updates:** Using the spread operator and `.map()` to update specific dice objects without mutating the original state array.
- **useRef for Focus Management:** Using `useRef<HTMLButtonElement>` to reference DOM elements for programmatic focus management, ensuring keyboard accessibility.
- **useEffect for Side Effects:** Implementing `useEffect` with proper dependency arrays to handle focus management when game state changes.
- **Game Logic Implementation:** Creating win condition checks using `.every()` method to verify all dice meet specific criteria.
- **Event Handling:** Managing click events with proper state updates, including toggling boolean properties and conditional logic.
- **Animation Integration:** Using both GSAP for custom DOM-based confetti animations and `react-confetti` library for different visual effects.
- **Custom Animation Creation:** Building custom GSAP animations with DOM manipulation, random positioning, and automatic cleanup using `onComplete` callbacks.
- **Conditional Rendering:** Dynamically showing UI elements (confetti, button text) based on game state with proper boolean checks.
- **Accessibility (a11y):** Implementing ARIA live regions (`aria-live="polite"`) and screen reader-only content (`sr-only` class) to announce game status changes.
- **Responsive Grid Layout:** Using CSS Grid (`grid-cols-5`) with responsive gap spacing for consistent dice arrangement across devices.
- **Component Composition:** Separating concerns with child components (`DieCard`, `CustomButton`) that receive props and handle their own rendering logic.

### 7. Interactive Game Logic and Accessibility (`AssemblyEndgame.tsx`)
- **Lazy State Initialization:** Using `useState(() => getRandomWord())` with function syntax to prevent re-evaluation of expensive operations on each render.
- **Utility Functions:** Separating game logic into external utility functions (`getRandomWord`, `getFarewellText`) for better code organization and reusability.
- **Reduce for Multiple Calculations:** Using `.reduce()` to calculate both right and wrong guessed keys in a single iteration instead of multiple `.filter()` operations for better performance.
- **State Derivation:** Computing game state (`isGameWon`, `isGameLost`, `attempts`) from existing state rather than storing redundant values, following React best practices.
- **Array Slicing and Mapping:** Using `.slice(0, wrongGuessCount).map()` to determine which languages should be "dead" based on wrong guess count.
- **Conditional State Updates:** Preventing duplicate letters in state using `prevLetter.includes(letter)` checks before adding new guessed letters.
- **Game Reset Logic:** Implementing complete game reset functionality that resets all related state variables to initial values.
- **Component Composition:** Breaking down complex UI into smaller, focused components (`GameStateContainer`, `TechCard`, `WordField`, `Keybord`) with clear prop interfaces.
- **Dynamic Props:** Passing computed values as props to child components, enabling reactive UI updates based on game state changes.
- **Conditional Rendering:** Using ternary operators and logical AND (`&&`) for conditionally rendering UI elements like confetti and buttons based on game state.
- **React-Confetti Integration:** Implementing celebration animations with customizable properties (`numberOfPieces`, `recycle`) triggered by win conditions.
- **CSS Grid and Flexbox:** Combining layout systems for responsive design - flexbox for main layout, specific arrangements for game elements.
- **String Manipulation:** Using `.toLowerCase()`, `.split()`, `.every()`, and `.includes()` for case-insensitive word matching and win condition checking.
- **Array Index Logic:** Using array indices (`index < wrongGuessCount`) to determine which visual elements should change state based on game progression.

## Contributing & Support

Contributions are welcome! If you have suggestions for improvements or find any issues, please feel free to open an issue or submit a pull request.

If you find this repository useful, please consider giving it a ⭐ star