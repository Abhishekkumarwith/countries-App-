

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app"; 
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetail from "./components/countryDetail";
import Contact from "./components/contact";
import "./App.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <Error />,
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:country",
          element: <CountryDetail />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ],
);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);