import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "../views/Register";
import Login from "../views/Login";
import Home from "../views/Home";
import BaseLayout from "../components/BaseLayout";
import MyClubs from '../views/MyClubs'
import UpdateForm from "../components/UpdateForm";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect("/login");
          }
          return null;
        },
      },
      {
        path: '/my-clubs',
        element: <MyClubs />,
        loader: () => {
            if (!localStorage.access_token) {
              return redirect("/login");
            }
            return null;
          },
      },
      {
        path: '/update-club/:clubId/:myClubId',
        element: <UpdateForm />,
        loader: () => {
            if (!localStorage.access_token) {
              return redirect("/login");
            }
            return null;
          },
      }
    ],
  },
]);

export default router;
