
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import Main1 from './Layout1/Main1/Main1';
import Shop from './component/Shop/Shop';
import Order from './component/Order/Order';
import { productAndcartLoader } from './Loader/productAndcartLoader';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element: <Main1></Main1>,
      children:[
        {
          path:'/',
          element: <Shop></Shop>
        },
        {
          path :'/order',
          loader : productAndcartLoader,
          element: <Order></Order>
        }
      ]
    }
  ])
  return (
    <div className="">
      {
        <RouterProvider router={router}></RouterProvider>
      }
      
    </div>
  );
}

export default App;
