import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  ModalHeader,
} from "@chakra-ui/react";
import { FilterIcon } from "@ui/icons/filter-icon";
import { SearchFilter } from "@/components/ui/search-filter";
import { SearchInput } from "@/components/ui/search-input";

export const SearchFilterModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        rightIcon={<FilterIcon w="20px" h="20px" />}
        bg={"#E71D36"}
        color={"#FFFFFF"}
        fontSize={"10px"}
        rounded={"full"}
        p={"7px 7px 7px 13px"}
        _hover={{
          bg: "rgba(231, 29, 54, .8)",
        }}
      >
        Filters
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={"90%"}>
          <ModalHeader>Bounty filters</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} flexDirection={"column"} gap={"20px"}>
            <SearchInput />
            <SearchFilter />
          </ModalBody>
          <ModalFooter>
            <Button
              bg={"#E71D36"}
              color={"#FFFFFF"}
              fontSize={"sm"}
              _hover={{
                bg: "rgba(231, 29, 54, .8)",
              }}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              fontSize={"sm"}
              _hover={{
                bg: "rgba(231, 29, 54, .8)",
              }}
            >
              Apply filters
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
