import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { GameDetailPage } from "../pages/GameDetailPage";
import { HomePage } from "../pages/HomePage";
import { Layout } from "../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "/games/:id", element: <GameDetailPage></GameDetailPage> },
    ],
  },
]);

export default router;
