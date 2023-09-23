import {
  List as ListPrimitive,
  ListItem as ListItemPrimitive,
  ListIcon,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { ChevronRightIcon } from "../icons/chevron-right-icon";

const List = forwardRef<
  React.ElementRef<typeof ListPrimitive>,
  React.ComponentPropsWithoutRef<typeof ListPrimitive>
>(({ children, ...rest }, ref) => (
  <ListPrimitive ref={ref} spacing="8px" {...rest}>
    {children}
  </ListPrimitive>
));

const ListItem = forwardRef<
  React.ElementRef<typeof ListItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof ListItemPrimitive>
>(({ children, ...rest }, ref) => (
  <ListItemPrimitive ref={ref} {...rest}>
    <ListIcon as={ChevronRightIcon} color="#E71D36" />
    {children}
  </ListItemPrimitive>
));

export { List, ListItem };
