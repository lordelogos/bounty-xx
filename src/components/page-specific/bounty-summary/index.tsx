import { Heading, Badge, Flex, Box, Text } from "@chakra-ui/react";
import { VerifiedTickIcon } from "@ui/icons/verified-tick-icon";

type BountyDetailsProps = {
  title: string;
  price: number;
  dueBy: string;
  skills: string[];
};

export const BountyDetails = ({
  title,
  price,
  dueBy,
  skills,
}: BountyDetailsProps) => {
  return (
    <>
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
          fontSize={["xs", null, "sm"]}
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
      </Box>
    </>
  );
};
