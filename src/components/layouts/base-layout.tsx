import { ReactNode } from "react";
import { Nav } from "../nav";
import { Footer } from "../footer";
import { Box, Flex } from "@chakra-ui/react";

type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Flex as="main" direction={"column"} h={"100dvh"}>
      <Nav />
      <Box as="section" flex={1}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};
