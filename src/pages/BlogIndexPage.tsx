import PageContainer from "../components/PageContainer";
import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

export default function BlogIndexPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition"
          >
            <Link
              to={`/blog/${post.slug}`}
              className="text-violet-600 font-medium hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
