import { BaseLayout } from "@/components/layouts/base-layout";
import { TaskBoardHeader } from "@/components/task-board-header";
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { ChevronRightIcon } from "@/components/ui/icons/chevron-right-icon";
import { VerifiedTickIcon } from "@/components/ui/icons/verified-tick-icon";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

export const ViewBounty = () => {
  const { title, price, dueBy, skills } = {
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
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Heading fontSize={"sm"} color={"#060606"}>
                {title}
              </Heading>
              <Badge
                bg={"rgba(6, 153, 85, 0.12)"}
                color={"rgba(6, 153, 85, 1)"}
                fontSize={"sm"}
                p={"7px 5px"}
                borderRadius={"5px"}
              >
                ${price.toFixed(2)}
              </Badge>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"11px"}>
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize={"11px"}>
                  Payment Verified <VerifiedTickIcon />
                </Text>
                <Text fontSize={"10px"} color={"#F50449"}>
                  Due by:{" "}
                  <Text as="span" fontWeight={"bold"}>
                    {dueBy}
                  </Text>
                </Text>
              </Flex>
              <Flex
                alignItems={"center"}
                gap={"7px"}
                flexWrap={"wrap"}
                pb={"4px"}
              >
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    p={"6px 7px"}
                    rounded={"full"}
                    fontSize={"9px"}
                    fontWeight={"normal"}
                    textTransform={"capitalize"}
                  >
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </BaseLayout>
  );
};
