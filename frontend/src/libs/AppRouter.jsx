import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import AppLayout from '../components/AppLayout';  
import NotFound from '../pages/NotFound';  
import FullPageLoader from '../components/FullPageLoader';  
import { lobbyLoader, codePageLoader } from '../utils/loaders';

const Lobby = lazy(() => import('../pages/LobbyPage'));
const CodeBlockPage = lazy(() => import('../pages/CodeBlockPage'));
const Page404 = lazy(() => import('../pages/Page404'));

const router = createBrowserRouter([
  {
    element: <AppLayout />,  
    errorElement: <NotFound />, 
    children: [
      {
        path: '/',
        element: <Lobby />,  
        loader: lobbyLoader,  
        errorElement: <NotFound />,      
      },
      {
        path: '/lobby',  
        element: <Lobby />,  
        loader: lobbyLoader,  
        errorElement: <NotFound />, 
      },
      {
        path: "/codeblock/:id",  
        element: <CodeBlockPage />,  
        loader: codePageLoader,   
        errorElement: <NotFound />,  
      },
      {
        path: '*',  
        element: <Page404 />,  
      },
    ],
  },
]);

function AppRouter() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default AppRouter;
