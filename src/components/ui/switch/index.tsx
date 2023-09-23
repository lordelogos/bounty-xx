import {
  FormControl,
  FormLabel,
  Switch as SwitchPrimitive,
} from "@chakra-ui/react";
import { forwardRef } from "react";

export const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitive>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive>
>((props, ref) => (
  <FormControl
    w={"max-content"}
    display="flex"
    alignItems="center"
    gap={"7px"}
    color={"#E71D36"}
  >
    <SwitchPrimitive id="available" size={"sm"} ref={ref} {...props} />
    <FormLabel fontSize={"sm"} htmlFor="available" mb="0">
      I'm available
    </FormLabel>
  </FormControl>
));
