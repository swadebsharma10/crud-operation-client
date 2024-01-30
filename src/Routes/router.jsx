import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddUser from "../components/AddUser";
import Home from "../components/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path: '/',
            element: <Home/>,
            loader: () => fetch('http://localhost:5000/users')
        },
        {
            path: '/add-user',
            element: <AddUser/>
        }
      ]
    },
  ]);