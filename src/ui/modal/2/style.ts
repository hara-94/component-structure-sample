import { RuleSet, css } from "styled-components";
import { BaseModalProps } from "~/ui/modal/base/types";

export const common = {
  header: css`
    background: linear-gradient(#e66465, #9198e5);
  `,
};

export const size: { [key in BaseModalProps["size"]]: RuleSet<object> } = {
  xl: css`
    width: 95%;
  `,
  md: css`
    width: fit-content;
  `,
  sm: css`
    width: fit-content;
  `,
};
