import { Navigate, createBrowserRouter } from "react-router-dom";
import { TaskBoard } from "@/pages/task-board";
import { ViewBounty } from "@/pages/view-bounty";
import { ErrorPage } from "@/pages/404";
import { BountySubmission } from "@/pages/bounty-submission";

export const router = createBrowserRouter([
  {
    path: "/bounty",
    element: <TaskBoard />,
  },
  {
    path: "/bounty/:id",
    element: <ViewBounty />,
  },
  {
    path: "/bounty/:id/submission",
    element: <BountySubmission />,
  },
  { path: "/", element: <Navigate to={"/bounty"} /> },
  { path: "*", element: <ErrorPage /> },
]);
