# 🧩 Next.js Multi-Page App with Posts and Users

This project is a comprehensive **Next.js** web application demonstrating core principles of modern front-end development using **TypeScript**, **Tailwind CSS**, and **React**. It includes multiple pages for displaying and managing posts and users, with interactive UI elements such as modal dialogs, reusable components, and dynamic routing.

---

## 📌 Project Description

This application serves as a learning tool and reference implementation for building scalable and maintainable web apps. It features:

- Multi-page layout with navigation
- Data fetching from an external API (JSONPlaceholder)
- Modal dialogs for creating posts and users
- Strong TypeScript integration and type safety
- Responsive UI with Tailwind CSS utility-first styling

---

## 🎯 Learning Objectives

By completing this project, you will learn to:

- Set up a fully typed **Next.js** application with **Tailwind CSS** and **ESLint**
- Implement **dynamic page routing** and navigation using Next.js
- Create **reusable React components** with TypeScript
- Fetch and display data from an **external REST API**
- Use **modals** for form-based user interactions
- Utilize `getStaticProps` for **static site generation (SSG)**
- Manage local state with **React hooks**
- Structure your codebase using **feature-based organization**
- Build a **responsive UI** with utility classes

---

## 📦 Requirements

### ✅ Technical

- [Node.js](https://nodejs.org/) v16 or later
- npm or yarn
- [Next.js](https://nextjs.org/) (latest version)
- TypeScript
- Tailwind CSS
- ESLint

### ✅ Functional

- Base app setup with Tailwind CSS & ESLint
- Global styling configuration
- Header-based navigation
- Dynamic pages: **Home**, **Posts**, **Users**
- Modal dialogs for adding **Posts** and **Users**
- State management with React hooks

---

## 📁 Project Structure

```bash
├── components/          # UI and layout components (Card, Button, Modal, etc.)
├── interfaces/          # Centralized TypeScript interfaces
├── pages/               # Next.js routing (home, posts, users)
├── public/              # Static assets
├── styles/              # Tailwind CSS config and global styles
├── utils/               # Utility functions (optional)
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── .eslintrc.js         # ESLint configuration
```

## ⚙️ Implementation Details

### 🔄 Routing & Navigation
- Implemented using the **Next.js Pages Router**
- Navigation links handled via `next/link`
- Smooth transitions without full page reloads

### 📝 Posts Feature
- Data fetched from **JSONPlaceholder API**
- `PostCard`: Displays post information
- `PostModal`: Modal form for adding new posts
- State handled via React `useState` and `useEffect`

### 👤 Users Feature
- Users fetched from **JSONPlaceholder API**
- `UserCard`: Displays nested user info (name, company, address)
- `UserModal`: Modal for creating new users
- Handles complex nested object structures safely with **TypeScript**

---

## 🔧 Best Practices

### 🧱 Component Architecture
- Follows **Atomic Design** principles
- Reusable UI components: `Card`, `Button`, `Modal`
- Clear separation of concerns between layout and logic

### 🧠 Type Safety
- Interfaces defined for props, state, and events
- Strong typing ensures reliability and maintainability

### 🎨 Styling
- Fully styled with **Tailwind CSS**
- Responsive, mobile-first layout
- Consistent use of spacing, colors, and typography

### 📊 State Management
- Uses `useState`, `useEffect`, and **state lifting**
- Local state kept minimal and scoped to components

---

## ⚡ Performance & Optimization
- Uses `next/image` for automatic image optimization (if applicable)
- Leverages **static generation** (`getStaticProps`) for improved performance
- Minimal and clean dependency setup
