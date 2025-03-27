import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 bg-blue-600 text-white">Code Collab App</header>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer className="p-4 bg-gray-200 text-center">© 2025</footer>
    </div>
  );
}

export default AppLayout;
