import PageContainer from "../components/PageContainer";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <PageContainer>
      <h1 className="text-4xl font-bold text-violet-600 mb-4">
        404 - Page Not Found
      </h1>
      <Link to="/blog" className="text-violet-600 underline">
        Return to Blog
      </Link>
    </PageContainer>
  );
}
