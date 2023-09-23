import { Card, CardBody, Heading, Text } from "@chakra-ui/react";

type SummaryCardProps = {
  heading: string;
  body: string;
};

export const SummaryCard = ({ heading, body }: SummaryCardProps) => {
  return (
    <Card rounded={"lg"} bg={"#060606"} color={"#FFFFFF"}>
      <CardBody
        p={"20px 30px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"5px"}
      >
        <Heading size={"md"}>{heading}</Heading>
        <Text fontSize={"xs"}>{body}</Text>
      </CardBody>
    </Card>
  );
};
