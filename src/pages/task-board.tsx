import { BaseLayout } from "@/components/layouts/base-layout";
import { TaskBoardHeader } from "@/components/task-board-header";
import { TaskBoardSummary } from "@/components/task-board-summary";

export const TaskBoard = () => {
  return (
    <BaseLayout marginX={"auto"} w={"90%"} maxW={"649px"} pt={"30px"}>
      <TaskBoardHeader />
      <TaskBoardSummary />
    </BaseLayout>
  );
};
