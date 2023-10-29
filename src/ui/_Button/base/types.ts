import { ComponentPropsWithoutRef } from "react";

export interface BaseButtonProps extends ComponentPropsWithoutRef<"button"> {
  $variant: "primary" | "secondary";
}
