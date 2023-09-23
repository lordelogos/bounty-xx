import { BaseLayout } from "@/components/layouts/base-layout";
import { TaskBoardContent } from "@/components/task-board-content";
import { TaskBoardHeader } from "@/components/task-board-header";
import { TaskBoardSummary } from "@/components/task-board-summary";
import { Container } from "@chakra-ui/react";

export const TaskBoard = () => {
  return (
    <BaseLayout marginX={"auto"} w={"100%"} pt={"30px"} overflow={"auto"}>
      <Container maxW={"649px"}>
        <TaskBoardHeader />
        <TaskBoardSummary />
        <TaskBoardContent />
      </Container>
    </BaseLayout>
  );
};
