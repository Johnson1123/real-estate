import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Layout/Header/Header.jsx";
import Footer from "./Layout/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import Agent from "./Pages/Agent/Agent.jsx";
import Property from "./Pages/Property/Property.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import PropertyPage from "./Pages/PropertyPage/PropertyPage.jsx";
import Login from "./Pages/SignUp/SignUp.jsx";
import Details from "./Pages/Details/propertyDetails.jsx";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/property-page",
          element: <PropertyPage />,
        },
      ],
    },
    {
      path: "/sign-up-as-agent",
      element: <Agent />,
    },

    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/add-property",
      element: <Property />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path:"/details",
      element:<Details/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
