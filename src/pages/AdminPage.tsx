import PageContainer from "../components/PageContainer";

export default function AdminPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-lg text-gray-700">
        Welcome! Only authenticated users can see this page. 🙂
      </p>
    </PageContainer>
  );
}
