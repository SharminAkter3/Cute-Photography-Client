import { createBrowserRouter } from "react-router-dom";
import Main from "../../Components/Layout/Main";
import AddService from "../../Components/Pages/AddService/AddService";
import Blog from "../../Components/Pages/Blog/Blog";
import Details from "../../Components/Pages/Details/Details";
import Error from "../../Components/Pages/Error/Error";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import MyReviews from "../../Components/Pages/MyReviews/MyReviews";
import UpdateUser from "../../Components/Pages/MyReviews/UpdateUser";
import Service from "../../Components/Pages/Services/Service";
import Services from "../../Components/Pages/Services/Services";
import SignUp from "../../Components/Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: () => fetch(`https://service-assignment-server-liart.vercel.app/services?limit=${3}`),
                element: <Services></Services>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://service-assignment-server-liart.vercel.app/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/updateUser/:id',
                element: <UpdateUser></UpdateUser>,
                loader: ({ params }) => fetch(`https://service-assignment-server-liart.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/*',
                element: <Error></Error>
            },

        ]
    },


]);

export default router;