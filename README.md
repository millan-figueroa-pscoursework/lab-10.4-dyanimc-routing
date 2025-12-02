# 📝 Lab 4 — Dynamic Routing Blog Application

A simple blog application built with **React Router**, dynamic URL parameters, and a basic authentication system using **React Context**. This project demonstrates modern SPA concepts such as protected routes, contextual state, and dynamically generated pages.

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
