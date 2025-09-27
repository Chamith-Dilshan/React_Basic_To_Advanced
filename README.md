# React Learning Projects (React + TypeScript + TailWind + Vite)

This repository is a collection of small React projects built to demonstrate various core concepts, from basic component structure to advanced features. It serves as a practical guide and a hands-on learning resource.

## Project Screenshots

### Travel Journal
A responsive component that displays a list of travel entries.

| Desktop View | Mobile View |
| :---: | :---: |
| ![Travel Journal Desktop](./public/travel-journal/desktop.png) | ![Travel Journal Mobile](./public/travel-journal/mobile.png) |

### Chef AI
An interactive app to manage a list of ingredients.

| Desktop View | Mobile View |
| :---: | :---: |
| ![Chef AI Desktop](./public/chef-ai/desktop.png) | ![Chef AI Mobile](./public/chef-ai/mobile.png) |

### Simple Form
A modern contact form built using React 19 features.

| Desktop View | Mobile View |
| :---: | :---: |
| ![Simple Form Desktop](./public/simple-form/desktop.png) | ![Simple Form Mobile](./public/simple-form/mobile.png) |

## Featured Libraries

### `tailwind-merge`
A utility function for merging Tailwind CSS classes in JS without style conflicts. It's essential for creating reusable components where you want to allow style overrides via props. It intelligently handles conflicting classes (like `bg-red-500` and `bg-blue-500`) by ensuring only the last one is applied.

**Usage:**
```jsx
import { twMerge } from 'tailwind-merge';

// The output will be 'p-4 bg-blue-500'
const mergedClasses = twMerge('p-4 bg-red-500', 'bg-blue-500'); 
```

### `react-icons`
A library that makes it easy to include popular icons in your React projects. It bundles icons from various sets (like Font Awesome, Material Design, etc.) as individual, tree-shakeable React components.

**Usage:**
```jsx
import { FaPhone } from 'react-icons/fa';

const MyComponent = () => <FaPhone />;
```

---

## React Learning Points in This Repo

### 1. State and Event Handling (`ChefAI.tsx`)
- **State Management:** Using the `useState` hook to manage arrays (adding and removing ingredients).
- **Event Handling:** Capturing user actions with `onSubmit` for forms and `onClick` for buttons.
- **Controlled Components:** Linking form inputs to state with `value` and `onChange`.
- **Unique Keys:** Generating unique IDs for list items using `crypto.randomUUID()` to ensure efficient rendering and state management.

### 2. Modern Form Handling with React 19 (`SimpleForm.tsx`)
- **React Actions:** Using the `<form action={...}>` prop to handle submissions without `useState` or manual `preventDefault()` calls.
- **Uncontrolled Components:** Building forms where the state is managed by the DOM, which is the modern default for simple forms.
- **`FormData` API:** Accessing submitted data within the action function, including using `formData.get()` for single values and `formData.getAll()` for multiple values (like checkboxes).
- **Styling Form Elements:** Customizing radio buttons and checkboxes with Tailwind CSS and the `accent-color` utility.

### 3. Component Creation and Data Rendering (`TravelJournal.tsx`)
- **Prop Passing:** Creating reusable components (`DetailCard`) that accept data through props.
- **Rendering Lists:** Using the `.map()` method to dynamically render a list of components from a data array.
- **TypeScript Integration:** Defining `interface` types for props and data objects to ensure type safety.
- **Responsive Design:** Using Tailwind's responsive prefixes (`md:`, `lg:`) to create layouts that adapt to different screen sizes.

### 4. Building Reusable Components (`NavBarComp.tsx`)
- **Component Props:** Designing components that can be configured with different data (title, image source).
- **Style Overrides:** Using `tailwind-merge` to allow parent components to safely override default styles via a `containerClass` prop.
- **Layout:** Creating a sticky header that remains at the top of the viewport during scrolling.

---