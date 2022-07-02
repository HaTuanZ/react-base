import Login from "@/views/auth/login";
import Register from "@/views/auth/register";
import Home from "@/views/home";
import Layout from "@/layouts/layout";

const routers = [
  {
    component: <Layout />,
    path: "/",
    children: [
      {
        path: "",
        component: <Home />,
        requireAuth: true,
      },
      {
        path: "login",
        component: <Login />,
      },
      {
        path: "register",
        component: <Register />,
      },
    ],
  },
];

export default routers;
