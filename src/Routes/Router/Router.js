import { createBrowserRouter } from "react-router-dom";
import Main from "../../Components/Layout/Main";
import Blog from "../../Components/Pages/Blog/Blog";
import Error from "../../Components/Pages/Error/Error";
import Home from "../../Components/Pages/Home/Home";

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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/*',
                element: <Error></Error>
            },

        ]
    },


]);

export default router;