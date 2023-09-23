import { Flex, Text, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { List, ListItem } from "@ui/list";

export const BountyDescription = () => {
  return (
    <Flex flexDirection={"column"} gap={"12px"} fontSize={"sm"}>
      <Text>
        It adds ~1kb (gzip) to your bundle, though it asynchronously load a 10kb
        third party dependency,{" "}
        <Link as={ReactRouterLink} to={"#"} color="#E71D36">
          Howler
        </Link>
      </Text>
      <Text>It offers a bunch of niceies out of the box, including:</Text>
      <List>
        <ListItem>
          Prematurely stop the sound, or pause/resume the sound.
        </ListItem>
        <ListItem>
          Load an audio sprite and splite it up into many individual sounds.
        </ListItem>
        <ListItem>Tweak playback speed to speed up / slow down sounds</ListItem>
        <ListItem>Tons of event listeners.</ListItem>
        <ListItem>
          Lots of other advanced stuff, made possible by Howler.
        </ListItem>
      </List>
      <Text>
        Check out{" "}
        <Link as={ReactRouterLink} to={"#"} color="#E71D36">
          the documentation
        </Link>{" "}
        for a comprehensive usage guide and API reference.
      </Text>
    </Flex>
  );
};
