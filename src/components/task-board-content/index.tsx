import { Grid, GridItem } from "@chakra-ui/react";
import { SearchInput } from "@ui/search-input";
import { SearchFilter } from "@ui/search-filter";

export const TaskBoardContent = () => {
  return (
    <Grid
      templateColumns={"2fr 1fr"}
      gap={"14px"}
      pt={"26px"}
      position={"relative"}
    >
      <GridItem></GridItem>
      <GridItem
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        position={"sticky"}
        top={0}
      >
        <SearchInput />
        <SearchFilter />
      </GridItem>
    </Grid>
  );
};
