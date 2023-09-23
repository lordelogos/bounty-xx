import {
  Card as CardPrimitive,
  CardBody,
  Heading,
  Text,
} from "@chakra-ui/react";

type CardProps = {
  heading: string;
  body: string;
};

export const Card = ({ heading, body }: CardProps) => {
  return (
    <CardPrimitive rounded={"lg"} bg={"#060606"} color={"#FFFFFF"}>
      <CardBody
        p={"20px 30px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"5px"}
      >
        <Heading size={"md"}>{heading}</Heading>
        <Text fontSize={"xs"}>{body}</Text>
      </CardBody>
    </CardPrimitive>
  );
};
