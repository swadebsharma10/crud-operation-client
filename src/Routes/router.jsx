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
            element: <Home/>
        },
        {
            path: '/add-user',
            element: <AddUser/>
        }
      ]
    },
  ]);