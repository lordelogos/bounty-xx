import { Button, Center, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <Center
      display={"flex"}
      flexDirection={"column"}
      gap={"8px"}
      w={"100%"}
      h={"100dvh"}
    >
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link as={ReactRouterLink} to="/bounty">
        <Button
          bg={"#E71D36"}
          color={"#FFFFFF"}
          fontSize={"sm"}
          _hover={{
            bg: "rgba(231, 29, 54, .8)",
          }}
        >
          Go Home
        </Button>
      </Link>
    </Center>
  );
};
