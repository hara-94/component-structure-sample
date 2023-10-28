import { BaseModalProps } from "~/ui/modal/base/types";
import { css, RuleSet } from "styled-components";

export const common = {
  modal: css`
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    background-color: white;
  `,
  overlay: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: black;
    opacity: 0.3;
  `,
  header: css`
    padding: 16px 8px;
  `,
  body: css`
    padding: 16px;
  `,
  footer: css`
    padding: 16px 8px;
  `,
};

export const size: { [key in BaseModalProps["size"]]: RuleSet<object> } = {
  xl: css`
    width: 80%;
  `,
  md: css`
    width: 50%;
  `,
  sm: css`
    width: 30%;
  `,
};
