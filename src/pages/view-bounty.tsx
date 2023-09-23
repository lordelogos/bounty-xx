import { BaseLayout } from "@/components/layouts/base-layout";
import { TaskBoardHeader } from "@/components/task-board-header";
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { ChevronRightIcon } from "@/components/ui/icons/chevron-right-icon";
import { Button, Container, Flex } from "@chakra-ui/react";

export const ViewBounty = () => {
  return (
    <BaseLayout marginX={"auto"} w={"100%"} pt={"30px"}>
      <Container maxW={"649px"}>
        <Flex alignItems={"flex-start"} justifyContent={"space-between"}>
          <TaskBoardHeader title="View Bounty">
            <Breadcrumb>
              <BreadcrumbItem href={"/bounty"}>Product Bounty</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                Sample bug fix for product listing API
              </BreadcrumbItem>
            </Breadcrumb>
          </TaskBoardHeader>
          <Button
            rightIcon={<ChevronRightIcon />}
            bg={"#E71D36"}
            color={"#FFFFFF"}
            fontSize={"10px"}
            rounded={"full"}
            p={"7px 7px 7px 13px"}
            _hover={{
              bg: "rgba(231, 29, 54, .8)",
            }}
          >
            Accept
          </Button>
        </Flex>
      </Container>
    </BaseLayout>
  );
};
