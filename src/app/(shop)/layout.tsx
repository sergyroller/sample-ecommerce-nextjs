import { Footer, Sidebar, TopMenu } from '@/components';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu></TopMenu>
      <Sidebar />
      <div className="px-0 md:px-10">{children}</div>
      <Footer></Footer>
    </main>
  );
}
