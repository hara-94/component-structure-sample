import { css } from "styled-components";

export const common = css`
  padding: 8px 16px;
  font-size: 18px;
  border-radius: 24px;
`;

export const variants = {
  primary: css`
    background-color: lightblue;
    color: white;
    border: none;
  `,
  secondary: css`
    background-color: white;
    color: lightblue;
    border: 2px solid lightblue;
  `,
};
