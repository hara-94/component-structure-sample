import { ReactNode } from "react";

// NOTE: footerContent: ReactNodeにした方が
//       拡張性あるけど、DOMが違うmodalを作りたいので
//       あえてfooterのDOMはハードコードしておく
export type BaseModalProps = {
  isOpen: boolean;
  size: "xl" | "md" | "sm";
  headerContent: ReactNode;
  bodyContent: ReactNode;
  footerLabel: string;
  footerCancelLabel: string;
  onClick?: () => void;
  onClickCancel?: () => void;
};
