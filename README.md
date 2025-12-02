# 📝 Lab 4 — Dynamic Routing Blog Application

A simple blog application built with **React Router**, dynamic URL parameters, and a basic authentication system using **React Context**. This project demonstrates modern SPA concepts such as protected routes, contextual state, and dynamically generated pages.
<br>

- No backend required

- No real password or user database

- Purely front-end authentication simulation

---

## 🚀 Features

### 📰 Public Blog Pages

- `/blog` — Lists all blog posts
- `/blog/:slug` — Displays a single post based on its slug
- Slugs are taken from mock post data
- Gracefully handles missing or invalid post slugs

### 🔐 Authentication System

- Client-side auth using React Context
- Provides:
  - `isAuthenticated`
  - `login()`
  - `logout()`
- Used throughout UI to conditionally render buttons/links

### 📁 Protected Route

- `/admin` route is only accessible to logged-in users
- Unauthenticated users are redirected to `/login`

### 🗂️ Project Structure

src/<br>
├── components/<br>
│ └── Navbar.tsx<br>
│ └── PageContainer.tsx<br>
│ └── ProtectedRoute.tsx<br>
├── context/<br>
│ └── AuthContext.tsx<br>
├── lib/<br>
│ └── posts.ts<br>
├── pages/<br>
│ ├── AdminPage.tsx<br>
│ ├── BlogIndexPage.tsx<br>
│ ├── BlogPostPage.tsx<br>
│ └── LoginPage.tsx<br>
├── App.tsx<br>
└── main.tsx<br>
<br>

---

## 📦 Installation

1. Clone the repo:

```bash
git clone <your_repo_url>
cd <project_folder>
```

2. Install dependencies:

```bash
npm install
```

3. Run the dev server:

```bash
npm run dev
```

<br>

---

## 🧠 Mock Blog Data

Posts are kept in an in-memory array (no backend required).

```bash
export const posts = [
  {
    id: 1,
    slug: "my-first-post",
    title: "My First Post",
    content: "Welcome to the blog!"
  }
];
```

<br>

---

## 🌐 Routing Overview

| <b>Route</b>  | <b>Description</b>                          |
| ------------- | ------------------------------------------- |
| `/blog`       | Blog index page with links                  |
| `/blog/:slug` | Dynamic route displaying a selected post    |
| `/login`      | Page to trigger `login()`                   |
| `/admin`      | Protected dashboard for authenticated users |

<br>

---

## 🔑 Authentication Details

### AuthContext:

Holds and provides auth state globally.

<b>isAuthenticated</b> — true/false

<b>login()</b> — Simulates user login

<b>logout()</b> — Simulates user logout

All UI components may access it via:

```bash
const { isAuthenticated, login, logout } = useAuth();
```

## <br>

## 🛡️ Protected Routes

/admin is gated using a wrapper component (e.g., ProtectedRoute).<br>
If user is not authenticated:

- They are redirected to /login.

Example logic:

```bash
return isAuthenticated ? children : <Navigate to="/login" />;
```

## <br>

## 🧭 Navigation Behavior

When logged out:

- Navbar shows: Login link

When logged in:

- Navbar shows:

  - Logout button

  - Link to /admin

<br>

---

## 🧪 How to Test

1. Visit /blog — You should see all posts listed.

2. Click a post → navigates to /blog/<slug>

3. Visit /admin without logging in → redirected to /login

4. Press "Log In" → redirected / allowed into admin

5. Press "Log Out" → admin becomes inaccessible again
