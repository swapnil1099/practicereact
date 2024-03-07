import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './compoenets/Contact';
import About from './compoenets/About';
import Error from './compoenets/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './compoenets/Body';
import ResturantMenu from './compoenets/ResturantMenu';
import Cart from './compoenets/Cart';


const Grocery = lazy(() => (import('./compoenets/Grocery')));


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/About",
                element: <About />,
            },
            {
                path: "/Contact",
                element: <Contact />,
            },
            {
                path: "/",
                element: <Body />,
            }, {
                path: "/resturants/:resId",
                element: <ResturantMenu />
            },
            {   path:"/cart",
                element:<Cart/>

            },
            {
                path: "grocery",
                element: <Suspense fallback={"Loading......"}><Grocery /></Suspense>,
            }],
        errorElement: <Error />
    },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={appRouter} />

);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
