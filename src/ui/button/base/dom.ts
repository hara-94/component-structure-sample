import { styled } from "styled-components";
import { variants, common } from "~/ui/Button/base/style";
import { BaseButtonProps } from "~/ui/Button/base/types";

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
