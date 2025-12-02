import { Routes, Route } from "react-router-dom";
import BlogIndexPage from "../pages/BlogIndexPage.tsx";
import BlogPostPage from "../pages/BlogPostPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </>
  );
}

export default App;
