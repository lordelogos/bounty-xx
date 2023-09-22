import { ReactNode } from "react";
import { NavBar } from "../nav";
import { Box } from "@chakra-ui/react";

type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Box as="main" h={"100%"}>
      <NavBar />
      {children}
    </Box>
  );
};
