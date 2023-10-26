import { ComponentPropsWithoutRef, MouseEventHandler } from "react";

type Props = {
  $variant: "primary" | "secondary";
  $isLoading?: boolean;
  $isError?: boolean;
};

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, keyof Props>,
    Props {}
