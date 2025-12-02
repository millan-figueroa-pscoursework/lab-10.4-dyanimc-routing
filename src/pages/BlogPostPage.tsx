import { useParams } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { posts } from "../lib/posts";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageContainer>
        <h2 className="text-xl text-violet-400 font-medium">Post not found.</h2>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg leading-relaxed text-gray-800">{post.content}</p>
    </PageContainer>
  );
}
