import {
  Avatar,
  Button,
  Grid,
  GridItem,
  IconProps,
  Link,
} from "@chakra-ui/react";
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { ComponentType } from "react";
import { HomeIcon } from "@ui/icons/home-icon";
import { PaymentIcon } from "@ui/icons/payment-icon";
import { ChannelIcon } from "@ui/icons/channel-icon";
import { BellIcon } from "@ui/icons/bell-icon";

const NAV_LINKS: NavItemProps[] = [
  {
    name: "Task Board",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Channel",
    href: "/channel",
    icon: ChannelIcon,
  },
  {
    name: "Payment",
    href: "/payment",
    icon: PaymentIcon,
  },
];

export const NavBar = () => {
  return (
    <Grid
      templateColumns={"repeat(5, 1fr)"}
      gap={8}
      height={68}
      py={"13.5px"}
      bg={"#FFFFFF"}
      borderBottom={"2px solid #EBEBEB"}
    >
      <GridItem
        gridColumn={"2/ span 3"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {NAV_LINKS.map((navLink, index) => (
          <NavItem key={index} {...navLink} />
        ))}
      </GridItem>
      <GridItem
        gridColumn={"5"}
        display={"flex"}
        alignItems={"center"}
        gap={"10px"}
      >
        <Button w="40px" h="40px" variant={"outline"} rounded={"full"}>
          <BellIcon />
        </Button>
        <Avatar src="/profile.jpg" name="User" w="40px" h="40px" />
      </GridItem>
    </Grid>
  );
};

type NavItemProps = {
  name: string;
  href: string;
  icon: ComponentType<IconProps>;
};

export const NavItem = ({ name, href, icon: Icon }: NavItemProps) => {
  return (
    <Link
      as={ReactRouterNavLink}
      to={href}
      display={"flex"}
      alignItems={"center"}
      gap="7px"
      px={"15px"}
      py={"10px"}
    >
      <Icon w={"20px"} h={"20px"} />
      <span>{name}</span>
    </Link>
  );
};
