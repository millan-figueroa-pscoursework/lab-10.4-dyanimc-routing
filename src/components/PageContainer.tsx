type Props = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: Props) {
  return <main className="max-w-3xl mx-auto px-6 py-8">{children}</main>;
}
