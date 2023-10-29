import { RuleSet, css } from "styled-components";
import { BaseButtonProps } from "~/ui/Button/base/types";

export const common = css`
  min-width: 120px;
  display: flex;
  justify-content: center;
  padding: 8px;
  border: 2px solid lightblue;
  font-size: 14px;
  // NOTE: styleの上書きなので、こういうbaseのstyleに依存してしまう箇所が出る
  border-radius: unset;
  color: black;
`;

export const variants: {
  [key in BaseButtonProps["$variant"]]: RuleSet<object>;
} = {
  primary: css`
    background: linear-gradient(to right, lightblue, white);
  `,
  secondary: css`
    background: linear-gradient(to right, white, lightblue);
  `,
};
