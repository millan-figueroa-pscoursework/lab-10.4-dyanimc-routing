# Lab 4 — Dynamic Routing To-Do List ✅

> Goal: Build a small blog app with dynamic routes, basic auth, and a protected admin page.

---

## Task 1 — Setup & Structure

- [x] Create a new React project (e.g., with Vite or Create React App).
- [x] Install React Router.
  - [x] `npm install react-router-dom`
- [ ] (Bonus) If doing animations, install framer-motion.
  - [ ] `npm install framer-motion`
- [x] Create a basic folder structure:
  - [x] `src/lib/` for mock data
  - [x] `src/components/` for shared UI (Navbar, etc.)
  - [x] `src/pages/` for page components (Blog, Post, Login, Admin)

---

## Task 2 — Mock Blog Data

- [x] Create `src/lib/posts.ts` (or `.js` if not using TS).
- [x] Define an array `posts` of blog post objects.
  - [x] Each post has:
    - [x] `id`
    - [x] `slug` (URL-friendly string, e.g. `"my-first-post"`)
    - [x] `title`
    - [x] `content`
- [x] Export the posts array.
- [ ] (Optional) Export helper functions:
  - [ ] `getPostBySlug(slug: string)` to find a post.

---

## Task 3 — Set Up React Router

- [x] Wrap the app in `BrowserRouter` in `main.tsx` or `index.jsx`.
- [x] Set up routes in `App`:
  - [x] `/blog` → Blog index page
  - [x] `/blog/:slug` → Dynamic blog post page
  - [x] `/login` → Login page
  - [x] `/admin` → Admin page (will be protected later)
- [x] Add a default route or home route (optional).

---

## Task 4 — Blog Index Page (`/blog`)

- [x] Create `BlogIndexPage` component (e.g., `src/pages/BlogIndexPage.tsx`).
- [x] Import the `posts` array.
- [x] Render a list of posts:
  - [x] Show each post’s `title`.
  - [x] Wrap each title in a `Link` to `/blog/<post.slug>`.
- [x] Connect this component to the `/blog` route.

---

## Task 5 — Dynamic Blog Post Page (`/blog/:slug`)

- [x] Create `BlogPostPage` component (e.g., `src/pages/BlogPostPage.tsx`).
- [x] Use `useParams()` from React Router to read the `slug` from the URL.
- [x] Find the corresponding post in the `posts` array using the slug.
- [x] If post exists:
  - [x] Display the `title`.
  - [x] Display the `content`.
- [x] If no post found:
  - [x] Display a “Post not found” message.
- [x] Connect this component to the `/blog/:slug` route.

---

## Task 6 — AuthContext (Authentication System)

- [x] Create `AuthContext` (e.g., `src/context/AuthContext.tsx`).
- [x] Define context shape:
  - [x] `isAuthenticated: boolean`
  - [x] `login(): void`
  - [x] `logout(): void`
- [x] Create an `AuthProvider` component that:
  - [x] Holds `isAuthenticated` in state.
  - [x] Implements `login()` → sets `isAuthenticated` to `true`.
  - [x] Implements `logout()` → sets `isAuthenticated` to `false`.
- [x] Wrap the app in `AuthProvider` (likely in `App` or `main`).
- [x] Create a custom hook `useAuth()` for easier access (optional but nice).

---

## Task 7 — Login Page (`/login`)

- [x] Create `LoginPage` component (e.g., `src/pages/LoginPage.tsx)
- [x] Add minimal styles and a README outlining project features
