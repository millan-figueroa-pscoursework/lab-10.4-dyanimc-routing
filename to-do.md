# Lab 4 — Dynamic Routing To-Do List ✅

> Goal: Build a small blog app with dynamic routes, basic auth, and a protected admin page.

---

## Task 1 — Setup & Structure

- [ ] Create a new React project (e.g., with Vite or Create React App).
- [ ] Install React Router.
  - [ ] `npm install react-router-dom`
- [ ] (Bonus) If doing animations, install framer-motion.
  - [ ] `npm install framer-motion`
- [ ] Create a basic folder structure:
  - [ ] `src/lib/` for mock data
  - [ ] `src/components/` for shared UI (Navbar, etc.)
  - [ ] `src/pages/` for page components (Blog, Post, Login, Admin)

---

## Task 2 — Mock Blog Data

- [ ] Create `src/lib/posts.ts` (or `.js` if not using TS).
- [ ] Define an array `posts` of blog post objects.
  - [ ] Each post has:
    - [ ] `id`
    - [ ] `slug` (URL-friendly string, e.g. `"my-first-post"`)
    - [ ] `title`
    - [ ] `content`
- [ ] Export the posts array.
- [ ] (Optional) Export helper functions:
  - [ ] `getPostBySlug(slug: string)` to find a post.

---

## Task 3 — Set Up React Router

- [ ] Wrap the app in `BrowserRouter` in `main.tsx` or `index.jsx`.
- [ ] Set up routes in `App`:
  - [ ] `/blog` → Blog index page
  - [ ] `/blog/:slug` → Dynamic blog post page
  - [ ] `/login` → Login page
  - [ ] `/admin` → Admin page (will be protected later)
- [ ] Add a default route or home route (optional).

---

## Task 4 — Blog Index Page (`/blog`)

- [ ] Create `BlogIndexPage` component (e.g., `src/pages/BlogIndexPage.tsx`).
- [ ] Import the `posts` array.
- [ ] Render a list of posts:
  - [ ] Show each post’s `title`.
  - [ ] Wrap each title in a `Link` to `/blog/<post.slug>`.
- [ ] Connect this component to the `/blog` route.

---

## Task 5 — Dynamic Blog Post Page (`/blog/:slug`)

- [ ] Create `BlogPostPage` component (e.g., `src/pages/BlogPostPage.tsx`).
- [ ] Use `useParams()` from React Router to read the `slug` from the URL.
- [ ] Find the corresponding post in the `posts` array using the slug.
- [ ] If post exists:
  - [ ] Display the `title`.
  - [ ] Display the `content`.
- [ ] If no post found:
  - [ ] Display a “Post not found” message.
- [ ] Connect this component to the `/blog/:slug` route.

---

## Task 6 — AuthContext (Authentication System)

- [ ] Create `AuthContext` (e.g., `src/context/AuthContext.tsx`).
- [ ] Define context shape:
  - [ ] `isAuthenticated: boolean`
  - [ ] `login(): void`
  - [ ] `logout(): void`
- [ ] Create an `AuthProvider` component that:
  - [ ] Holds `isAuthenticated` in state.
  - [ ] Implements `login()` → sets `isAuthenticated` to `true`.
  - [ ] Implements `logout()` → sets `isAuthenticated` to `false`.
- [ ] Wrap the app in `AuthProvider` (likely in `App` or `main`).
- [ ] Create a custom hook `useAuth()` for easier access (optional but nice).

---

## Task 7 — Login Page (`/login`)

- [ ] Create `LoginPage` component (e.g., `src/pages/LoginPage.t
