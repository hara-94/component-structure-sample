import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styled from "styled-components";
import * as CSS from "csstype";

export interface VSTackProps extends ComponentPropsWithoutRef<"div"> {
  $gap?: number;
  $align?: CSS.Property.AlignItems;
  $padding?: CSS.Property.Padding;
}

const StyledDiv = styled.div<VSTackProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap ?? 8}px;
  align-items: ${(props) => props.$align ?? "stretch"};
  padding: ${(props) => props.$padding};
`;

export const VStack = (props: PropsWithChildren<VSTackProps> = {}) => {
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};
