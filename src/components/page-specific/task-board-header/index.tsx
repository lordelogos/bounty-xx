import { Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type TaskBoardHeaderProps = {
  title: string;
  children?: ReactNode;
};

export const TaskBoardHeader = ({ children, title }: TaskBoardHeaderProps) => {
  return (
    <Flex direction={"row"} alignItems={"flex-end"}>
      <Flex direction={"column"} gap={"5px"} flex={1}>
        <Heading size={"md"}>{title}</Heading>
        {children}
      </Flex>
    </Flex>
  );
};
