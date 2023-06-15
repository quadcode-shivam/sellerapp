import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import  all components here--->
import Username from "./components/Username";
import Register from "./components/Register";
import Password from "./components/Password";
import Recover from "./components/Recover";
import Reset from "./components/Reset";
import Profile from "./components/Profile";
import HomePage from "./components/HomePage";
//root routes----->
const router = createBrowserRouter([
  { path: "/", element: <Username></Username> },
  { path: "/register", element: <Register></Register> },
  { path: "/recover", element: <Recover></Recover> },
  { path: "/password", element: <Password></Password> },
  { path: "/profile", element: <Profile></Profile> },
  { path: "/admin", element: <HomePage></HomePage> },
  { path: "/reset", element: <Reset></Reset> },
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
