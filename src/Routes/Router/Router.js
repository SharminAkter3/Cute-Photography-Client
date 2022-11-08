import { createBrowserRouter } from "react-router-dom";
import Main from "../../Components/Layout/Main";
import Blog from "../../Components/Pages/Blog/Blog";
import Error from "../../Components/Pages/Error/Error";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import ServiceCard from "../../Components/Pages/ServiceCard/ServiceCard";
import Services from "../../Components/Pages/Services/Services";

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
                path: '/services/:id',
                element: <ServiceCard></ServiceCard>
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
                path: '/*',
                element: <Error></Error>
            },

        ]
    },


]);

export default router;