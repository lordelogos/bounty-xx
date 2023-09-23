import { BaseLayout } from "@/components/layouts/base-layout";
import { TaskBoardContent } from "@/components/page-specific/task-board-content";
import { TaskBoardHeader } from "@/components/page-specific/task-board-header";
import { TaskBoardSummary } from "@/components/page-specific/task-board-summary";
import { Switch } from "@/components/ui/switch";
import { Container, Flex, Text } from "@chakra-ui/react";

export const TaskBoard = () => {
  return (
    <BaseLayout marginX={"auto"} w={"100%"} pt={"30px"}>
      <Container maxW={"649px"}>
        <TaskBoardHeader title="Product Bounty">
          <Flex
            flexDirection={["column", null, "row"]}
            alignItems={["flex-start", null, "center"]}
            gap={"8px"}
            justifyContent={"space-between"}
          >
            <Text fontSize={"xs"}>
              Get paid when you complete a bounty for any project
            </Text>
            <Switch defaultChecked />
          </Flex>
        </TaskBoardHeader>
        <TaskBoardSummary />
        <TaskBoardContent />
      </Container>
    </BaseLayout>
  );
};
