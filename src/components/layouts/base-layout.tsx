import { ReactNode } from "react";
import { Nav } from "../nav";
import { Footer } from "../footer";
import { Box, BoxProps, Flex } from "@chakra-ui/react";

type BaseLayoutProps = {
  children: ReactNode;
} & BoxProps;

export const BaseLayout = ({ children, ...rest }: BaseLayoutProps) => {
  return (
    <Flex as="main" direction={"column"} h={"100dvh"}>
      <Nav />
      <Box as="section" flex={1} {...rest}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};
