import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

export default function BlogIndexPage() {
  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
