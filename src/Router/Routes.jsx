import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails";
import ForgetPass from "../Pages/ForgetPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Register></Register>
        },
        {
          path: '/profile',
          element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
        },
        {
          path: '/details/:id',
          element: <PrivateRoute> <ServiceDetails></ServiceDetails> </PrivateRoute>
        },
        {
          path: '/forget/:email',
          element: <ForgetPass></ForgetPass>
        }
    ]
  },
]);

export default router;