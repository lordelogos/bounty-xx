import { Navigate, createBrowserRouter } from "react-router-dom";
import { TaskBoard } from "@/pages/task-board";
import { ViewBounty } from "@/pages/view-bounty";
import { ErrorPage } from "@/pages/404";

export const router = createBrowserRouter([
  {
    path: "/bounty",
    element: <TaskBoard />,
  },
  {
    path: "/bounty/:id",
    element: <ViewBounty />,
  },
  { path: "/", element: <Navigate to={"/bounty"} /> },
  { path: "*", element: <ErrorPage /> },
]);
