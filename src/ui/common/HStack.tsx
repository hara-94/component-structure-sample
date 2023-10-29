import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styled from "styled-components";
import * as CSS from "csstype";

const StyledDiv = styled.div<HSTackProps>`
  display: flex;
  gap: 16px;
  justify-content: ${(props) => props.$justify ?? "flex-start"};
`;

export interface HSTackProps extends ComponentPropsWithoutRef<"div"> {
  $justify?: CSS.Property.JustifyContent;
}

export const HStack = (props: PropsWithChildren<HSTackProps> = {}) => {
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};
