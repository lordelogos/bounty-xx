import { Flex, Heading, Text } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";

export const TaskBoardHeader = () => {
  return (
    <Flex direction={"row"} alignItems={"flex-end"}>
      <Flex direction={"column"} gap={"5px"} flex={1}>
        <Heading size={"md"}>Product Bounty</Heading>
        <Text fontSize={"xs"}>
          Get paid when you complete a bounty for any project
        </Text>
      </Flex>
      <Switch />
    </Flex>
  );
};
