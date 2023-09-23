import { BaseLayout } from "@/components/layouts/base-layout";
import { BountySubmissionForm } from "@/components/page-specific/bounty-submission";
import { TaskBoardHeader } from "@/components/page-specific/task-board-header";
import { Container, Text } from "@chakra-ui/react";

export const BountySubmission = () => {
  return (
    <BaseLayout marginX={"auto"} w={"100%"} pt={"30px"}>
      <Container
        maxW={"649px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"24px"}
      >
        <TaskBoardHeader title="Bounty Submission">
          <Text fontSize={"xs"}>
            Complete your bounty by providing your solution details
          </Text>
        </TaskBoardHeader>
        <BountySubmissionForm />
      </Container>
    </BaseLayout>
  );
};
