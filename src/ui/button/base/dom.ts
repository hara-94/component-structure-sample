import { styled } from "styled-components";
import { variants, common } from "~/ui/button/base/style";
import { BaseButtonProps } from "~/ui/button/base/types";

export const BaseButtonDom = styled.button<BaseButtonProps>`
  ${common}

  ${(props) => {
    switch (props.$variant) {
      case "primary":
        return variants.primary;
      case "secondary":
        return variants.secondary;
    }
  }}
`;
