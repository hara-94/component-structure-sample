import { RuleSet, css } from "styled-components";
import { ButtonProps } from "~/ui/FileUpload/2/types";

export const common = {
  input: css`
    display: none;
  `,
  button: css`
    width: 50px;
    font-size: 12px;
    color: white;
    border: none;
  `,
  display: css`
    width: 60px;
    height: 60px;
    border: 2px solid lightgray;
    border-radius: 50%;
  `,
};

export const buttonVariants: {
  [key in ButtonProps["$variant"]]: RuleSet<object>;
} = {
  add: css`
    background-color: #8fffb4;
  `,
  delete: css`
    background-color: #ff5454;
  `,
};
