import { createBrowserRouter } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router/dom";
import Root from '../pages/root/Root';
// import Root from '../pages/Root';
import Home from '../pages/home/Home';
import Apps from '../pages/apps/Apps';
// import AppList from '../pages/apps/Apps';
// import AppDetails from '../pages/apps/AppDetails';
// import Installation from '../pages/installation/Installation';
// import AppNotFound from '../pages/errorpage/AppNotFound';
// import ErrorPage from '../pages/errorpage/ErrorPage';


import AppDetails from '../pages/apps/AppDetails';

import Installation from '../pages/installation/Installation';

import AppNotFound from '../pages/errorpage/AppNotFound';
import ErrorPage from '../pages/errorpage/ErrorPage';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
   
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
       
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        // path: "/apps/:id",
        path: "/apps/:id",
        element: <AppDetails />,
      },
      {
        path: "/installation",
        element: <Installation />,
        // path: "/installed"
      },
      {
        path: "/app-not-found",
        element: <AppNotFound />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      }
    ]
  },
]);