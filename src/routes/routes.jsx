import { createBrowserRouter } from "react-router-dom";
import Login from "../login/Login";
import HomePage from "../pages/home/HomePage";
import ContactUS from "../components/contactUs/ContactUS";
import StartedPage from "../singlePage/StartedPage";

export const routing = createBrowserRouter([
    {
        path: "/",
        element: <StartedPage />,
    },
    {
        path: "/GetStarted",
        element: <Login />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
]);
