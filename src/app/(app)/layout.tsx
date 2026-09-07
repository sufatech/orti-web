export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-grow flex flex-col">
      {/* App Sidebar/Topbar will go here in the future */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>
    </div>
  );
}
