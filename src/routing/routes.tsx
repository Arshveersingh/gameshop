import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { GameDetailPage } from "../pages/GameDetailsPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { Layout } from "../pages/Layout";
import { GameAchievementPage } from "../pages/GameAchievementPage";
import { SignupPage } from "../pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "/games", element: <HomePage></HomePage> },
      { path: "/signup", element: <SignupPage></SignupPage> },
      { path: "/games/:slug", element: <GameDetailPage></GameDetailPage> },
      {
        path: "/games/:slug/achievements",
        element: <GameAchievementPage></GameAchievementPage>,
      },
    ],
  },
]);

export default router;
