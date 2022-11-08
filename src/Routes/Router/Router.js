import { createBrowserRouter } from "react-router-dom";
import Main from "../../Components/Layout/Main";
import AddService from "../../Components/Pages/AddService/AddService";
import Blog from "../../Components/Pages/Blog/Blog";
import Details from "../../Components/Pages/Details/Details";
import Error from "../../Components/Pages/Error/Error";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import MyRivews from "../../Components/Pages/MyRivews/MyRivews";
import ServiceCard from "../../Components/Pages/ServiceCard/ServiceCard";
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
                element: <Services></Services>
            },
            {
                path: '/details/:id',
                element: <Details></Details>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
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
                path: '/myreviews',
                element: <MyRivews></MyRivews>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/*',
                element: <Error></Error>
            },

        ]
    },


]);

export default router;