import {
  Breadcrumb as BreadcrumbPrimitive,
  BreadcrumbItem as BreadcrumbItemPrimitive,
  BreadcrumbLink as BreadcrumbLinkPrimitive,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { ChevronRightIcon } from "@ui/icons/chevron-right-icon";

const Breadcrumb = forwardRef<
  React.ElementRef<typeof BreadcrumbPrimitive>,
  React.ComponentPropsWithoutRef<typeof BreadcrumbPrimitive>
>(({ children, ...rest }, ref) => (
  <BreadcrumbPrimitive
    ref={ref}
    spacing="5px"
    separator={<ChevronRightIcon color="#A2A2A2" />}
    {...rest}
  >
    {children}
  </BreadcrumbPrimitive>
));

const BreadcrumbItem = forwardRef<
  React.ElementRef<typeof BreadcrumbItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof BreadcrumbItemPrimitive>
>(({ children, isCurrentPage, ...props }, ref) => (
  <BreadcrumbItemPrimitive ref={ref} isCurrentPage={isCurrentPage} {...props}>
    <BreadcrumbLinkPrimitive
      color={isCurrentPage ? "#060606" : "#575757"}
      fontWeight={isCurrentPage ? "medium" : "normal"}
    >
      {children}
    </BreadcrumbLinkPrimitive>
  </BreadcrumbItemPrimitive>
));

export { Breadcrumb, BreadcrumbItem };
