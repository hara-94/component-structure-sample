import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  gap: 16px;
`;

export interface HSTackProps extends ComponentPropsWithoutRef<"div"> {}

export const HStack = (props: PropsWithChildren<HSTackProps> = {}) => {
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};
