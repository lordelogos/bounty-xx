import { createBrowserRouter } from "react-router-dom";
import { TaskBoard } from "@/pages/task-board";
import { ViewBounty } from "@/pages/view-bounty";

export const routes = {
  taskboard: "/",
  viewBounty: "/bounty/:id",
};

export const router = createBrowserRouter([
  {
    path: routes.taskboard,
    element: <TaskBoard />,
  },
  {
    path: routes.viewBounty,
    element: <ViewBounty />,
  },
]);
