import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@ui/icons/search-icon";

export const SearchInput = () => {
  return (
    <InputGroup
      border={"solid 1px #D4D4D4"}
      rounded={"full"}
      colorScheme="brand"
    >
      <Input
        type="text"
        placeholder="Search"
        fontSize={"xs"}
        border={"none"}
        rounded={"full"}
        pl={"15px"}
        bg={"#FFFFFF"}
      />
      <InputRightElement
        bg={"rgba(231, 29, 54, 0.10)"}
        rounded={"full"}
        h={"30px"}
        w={"30px"}
        right={"7px"}
        top={"50%"}
        transform={"translateY(-50%)"}
        cursor={"pointer"}
      >
        <SearchIcon w={"15px"} h={"15px"} color={"#E71D36"} />
      </InputRightElement>
    </InputGroup>
  );
};
