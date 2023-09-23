import { ReactNode } from "react";
import { Nav } from "../general/nav";
import { Footer } from "../general/footer";
import { Box, BoxProps, Flex } from "@chakra-ui/react";

type BaseLayoutProps = {
  children: ReactNode;
} & BoxProps;

export const BaseLayout = ({ children, ...rest }: BaseLayoutProps) => {
  return (
    <Flex
      as="main"
      direction={"column"}
      minHeight={"100dvh"}
      h={"100%"}
      position={"relative"}
    >
      <Nav position={"sticky"} top={"0"} left={"0"} zIndex={"2"} />
      <Box as="section" flex={1} {...rest}>
        {children}
      </Box>
      <Footer position={"fixed"} bottom={"0"} left={"0"} zIndex={"2"} />
    </Flex>
  );
};
