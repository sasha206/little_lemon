import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './project/site/home/home_page';
import About from './project/site/about/about_page';
import Layout from './project/other/components/layout';
import Login from './project/site/login/login_page';
import Order from './project/site/order/order_page';
import Reservations from './project/site/reservations/reservations_page';
import Menu from './project/site/menu/menu_page';
const router = createBrowserRouter([
  {
    path: '/',       
    element: <Layout />,  
    children: [
      {
        index: true,    
        element: <Home />,  
      },
      {
        path: 'about',    
        element: <About />,
      },
      {
        path: 'login',       
        element: <Login />,
      },
      {
        path: 'order',        
        element: <Order />,
      },
      {
        path: 'reservations',        
        element: <Reservations />,
      },
      {
        path: 'menu',
        element: <Menu/>
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

