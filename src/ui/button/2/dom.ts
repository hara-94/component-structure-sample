import { styled } from "styled-components";
import { BaseButtonDom } from "~/ui/Button/base/dom";
import { common, variants } from "~/ui/Button/2/style";

export const Button2Dom = styled(BaseButtonDom)`
  // NOTE: baseのcssを上書くために詳細度を上げる
  && {
    ${common}

    ${(props) => variants[props.$variant]}
  }
`;
