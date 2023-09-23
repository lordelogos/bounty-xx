import { Checkbox, Flex, Heading } from "@chakra-ui/react";

const SEARCH_FILTERS = [
  "ecommerce",
  "financial services",
  "artificial intelligence",
  "marketplace",
  "search engine",
  "blockchain/web3",
  "enterprise/SaaS",
  "regulatory tech",
  "consumer SaaS",
  "developer tools",
  "human resources",
  "gaming",
  "IoT",
  "health tech",
  "edtech",
];

export const SearchFilter = () => {
  return (
    <Flex flexDirection={"column"} gap={"22px"}>
      <Heading as="h3" fontSize={"sm"}>
        Filter by Industry
      </Heading>
      <Flex flexDirection={"column"} gap={"11px"}>
        {SEARCH_FILTERS.map((filter, index) => (
          <Checkbox
            key={index}
            colorScheme="brand"
            textTransform={"capitalize"}
          >
            {filter}
          </Checkbox>
        ))}
      </Flex>
    </Flex>
  );
};
