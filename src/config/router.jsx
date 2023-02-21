import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import PrivateLayout from "../layout/PrivateLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PublicLayout from "../layout/PublicLayout";
import Cart from "../pages/Cart";
import Information from "../pages/Information";
import Payment from "../pages/Payment";
import Success from "../pages/Success";
import ViewFood from "../pages/ViewFood";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <PublicLayout>
                    <Login />
                </PublicLayout>,
            },
            {
                path: "register",
                element: <PublicLayout>
                    <Register />
                </PublicLayout>,
            },
            {
                path: "dashboard",
                element: <PrivateLayout />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                ],
            },
            {
                path: "cart",
                element: <PrivateLayout />,
                children: [
                    {
                        index: true,
                        element: <Cart />,
                    },
                ],
            },
            {
                path: "checkout",
                element: <PrivateLayout />,
                children: [
                    {
                        index: true,
                        element: <Information />,
                    },
                    {
                        path: '/checkout/payment',
                        element: <Payment />,
                    },
                    {
                        path: '/checkout/success',
                        element: <Success />,
                    },
                ],
            }, {
                path: "ViewFood",
                element: <PrivateLayout/>,
                children: [
                    {
                        path: '/ViewFood/:id',
                        element: <ViewFood/>,
                    },
                ],
            },
        ],
        
    },
]);
