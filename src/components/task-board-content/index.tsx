import { Grid, GridItem } from "@chakra-ui/react";
import { SearchInput } from "@ui/search-input";
import { SearchFilter } from "@ui/search-filter";
import { TaskCard as TaskCardProps } from "@/lib/types";
import { TaskCard } from "@ui/cards/task-card";

const TASKS: TaskCardProps[] = [
  {
    title: "Sample bug fix for product listing API",
    price: 200,
    dueBy: "7 Oct, 2023",
    skills: ["django", "zapier", "postgreSQL"],
    href: "/bounty/1",
  },
  {
    title: "Sample bug fix for product listing API",
    price: 120,
    dueBy: "7 Oct, 2023",
    skills: ["django", "GPT-4", "postgreSQL", "stripe"],
    href: "/bounty/2",
  },
  {
    title: "Sample bug fix for product listing API",
    price: 200,
    dueBy: "7 Oct, 2023",
    skills: ["django", "Dall-e", "mongoDB", "web3"],
    href: "/bounty/1",
  },
  {
    title: "Sample bug fix for product listing API",
    price: 120,
    dueBy: "7 Oct, 2023",
    skills: ["django", "GPT-4", "postgreSQL", "stripe"],
    href: "/bounty/2",
  },
  {
    title: "Sample bug fix for product listing API",
    price: 200,
    dueBy: "7 Oct, 2023",
    skills: ["django", "zapier", "postgreSQL"],
    href: "/bounty/1",
  },
  {
    title: "Sample bug fix for product listing API",
    price: 120,
    dueBy: "7 Oct, 2023",
    skills: ["django", "GPT-4", "postgreSQL", "stripe"],
    href: "/bounty/2",
  },
  {
    title: "Sample bug fix for product listing API",
    price: 200,
    dueBy: "7 Oct, 2023",
    skills: ["django", "Dall-e", "mongoDB", "web3"],
    href: "/bounty/1",
  },
  {
    title: "Sample bug fix for product listing API",
    price: 120,
    dueBy: "7 Oct, 2023",
    skills: ["django", "GPT-4", "postgreSQL", "stripe"],
    href: "/bounty/2",
  },
];

export const TaskBoardContent = () => {
  return (
    <Grid
      templateColumns={"2fr 1fr"}
      gap={"14px"}
      pt={"26px"}
      pb={"80px"}
      position={"relative"}
    >
      <GridItem
        borderTop={"solid 1px #D4D4D4"}
        borderRight={"solid 1px #D4D4D4"}
        roundedTopRight={"10px"}
        p={"20px 20px 0 0"}
        display={"flex"}
        flexDirection={"column"}
        gap={"15px"}
      >
        {TASKS.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </GridItem>
      <GridItem
        display={"flex"}
        flexDirection={"column"}
        height={"max-content"}
        gap={"20px"}
        position={"sticky"}
        top={"89px"}
        zIndex={"1"}
      >
        <SearchInput />
        <SearchFilter />
      </GridItem>
    </Grid>
  );
};
