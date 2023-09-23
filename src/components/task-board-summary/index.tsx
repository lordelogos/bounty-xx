import { Grid, GridItem } from "@chakra-ui/react";
import { SummaryCard } from "@/components/ui/cards/summary-card";

const SUMMARY_CARDS = [
  { heading: "$0.00", body: "Total Earnings" },
  { heading: "0", body: "Bounty Accepted" },
  { heading: "0", body: "Bounty Completed" },
];

export const TaskBoardSummary = () => {
  return (
    <Grid templateColumns={"repeat(3, 1fr)"} gap={"20px"} paddingTop={"20px"}>
      {SUMMARY_CARDS.map((summaryCard, index) => (
        <GridItem key={index}>
          <SummaryCard {...summaryCard} />
        </GridItem>
      ))}
    </Grid>
  );
};
