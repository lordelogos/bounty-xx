import { Grid, GridItem } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <Grid templateColumns={"repeat(5, 1fr)"} gap={8} height={68}>
      <GridItem gridColumn={"2/ span 3"} bg="red"></GridItem>
      <GridItem gridColumn={"5"} bg="blue"></GridItem>
    </Grid>
  );
};
