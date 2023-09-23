import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { VerifiedTickIcon } from "@ui/icons/verified-tick-icon";
import { ChevronRightIcon } from "@ui/icons/chevron-right-icon";
import { TaskCard as TaskCardProps } from "@/lib/types";
import { Link } from "react-router-dom";

export const TaskCard = ({
  title,
  price,
  dueBy,
  skills,
  href,
}: TaskCardProps) => {
  return (
    <Card
      p={"15px 20px 20px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"15px"}
      boxShadow={"0px 5px 50px 0px rgba(56, 56, 56, 0.05)"}
    >
      <CardHeader
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={0}
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
      </CardHeader>
      <CardBody p={0} display={"flex"} flexDirection={"column"} gap={"11px"}>
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
        <Flex alignItems={"center"} gap={"7px"} flexWrap={"wrap"} pb={"4px"}>
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
        <Link to={href}>
          <Button
            bg={"#FFFFFF"}
            border={"solid 1px #E71D36"}
            color={"#E71D36"}
            rounded={"full"}
            width={"max-content"}
            fontSize={"10px"}
            fontWeight={"bold"}
            p={"7px 7px 7px 13px"}
            variant={"outline"}
            rightIcon={<ChevronRightIcon />}
          >
            See Details
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};
