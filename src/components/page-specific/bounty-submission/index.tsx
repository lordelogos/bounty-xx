import {
  Button,
  Flex,
  FlexProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const BountySubmissionForm = (props: FlexProps) => {
  return (
    <Flex as="form" flexDirection={"column"} gap={"16px"} {...props}>
      <FormControl isRequired>
        <FormLabel fontSize={"sm"}>Name</FormLabel>
        <Input type="text" placeholder="John Doe" fontSize={"sm"} />
        <FormErrorMessage>Name is required.</FormErrorMessage>
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontSize={"sm"}>Email address</FormLabel>
        <Input type="email" placeholder="johnDoe@email.com" fontSize={"sm"} />
        <FormErrorMessage>Email is required.</FormErrorMessage>
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontSize={"sm"}>Github URL</FormLabel>
        <Input
          type="text"
          placeholder="github.com/username/project-name"
          fontSize={"sm"}
        />
        <FormErrorMessage>Please provide a valid Github URL..</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel fontSize={"sm"}>File attachment (if applicable)</FormLabel>
        <Input type="file" fontSize={"sm"} />
      </FormControl>
      <Button
        type="submit"
        color={"#FFFFFF"}
        border={"solid 1px #E71D36"}
        bg={"#E71D36"}
        fontSize={"sm"}
        _hover={{
          bg: "rgba(231, 29, 54, .8)",
        }}
      >
        Submit bounty{" "}
      </Button>
    </Flex>
  );
};
