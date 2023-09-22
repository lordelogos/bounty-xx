import { createBrowserRouter } from "react-router-dom";
import { TaskBoard } from "@/pages/task-board";
import { ViewBounty } from "@/pages/view-bounty";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskBoard />,
  },
  {
    path: "/bounty/:id",
    element: <ViewBounty />,
  },
]);
