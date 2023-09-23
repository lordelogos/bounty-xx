import { Box, BoxProps } from "@chakra-ui/react";

export const Footer = (props: BoxProps) => {
  return (
    <Box
      as="footer"
      h={"60px"}
      w={"100%"}
      bg={"#FFFFFF"}
      borderTop={"2px solid #EBEBEB"}
      {...props}
    />
  );
};
