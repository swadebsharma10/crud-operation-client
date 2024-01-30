import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddUser from "../components/AddUser";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import UpdateUser from "../components/UpdateUser";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: '/',
            element: <Home/>,
            loader: () => fetch('http://localhost:5000/users')
        },
        {
            path: '/add-user',
            element: <AddUser/>
        },
        {
            path: '/update-user/:id',
            element: <UpdateUser/>,
            loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
        }
      ]
    },
  ]);