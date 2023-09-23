import { BountyDescription } from "@/components/page-specific/bounty-description";
import { BountyDetails } from "@/components/page-specific/bounty-summary";
import { BaseLayout } from "@/components/layouts/base-layout";
import { TaskBoardHeader } from "@/components/page-specific/task-board-header";
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { ChevronRightIcon } from "@/components/ui/icons/chevron-right-icon";
import { Button, Container, Flex, Grid, GridItem } from "@chakra-ui/react";

export const ViewBounty = () => {
  const bounty = {
    title: "Sample bug fix for product listing API",
    price: 200,
    dueBy: "7 Oct, 2023",
    skills: ["django", "zapier", "postgreSQL"],
  };

  return (
    <BaseLayout marginX={"auto"} w={"100%"} pt={"30px"}>
      <Container
        maxW={"649px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"48px"}
      >
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
        <Grid templateColumns={"2fr 1fr"} gap={"14px"}>
          <GridItem display={"flex"} flexDirection={"column"} gap={"15px"}>
            <BountyDetails {...bounty} />
          </GridItem>
        </Grid>
        <BountyDescription />
      </Container>
    </BaseLayout>
  );
};
