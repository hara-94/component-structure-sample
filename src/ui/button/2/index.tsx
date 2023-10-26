import styled, { css } from "styled-components";

import { Button } from "~/ui/button/base";

const variants = {
  primary: css`
    border: 2px dashed lightblue;
  `,
  secondary: css`
    border: 2px dotted lightblue;
  `,
};

// baseのbuttonのstyleのみ上書き
// baseのbuttonのcssと諸々競合するので注意
export const T2Button = styled(Button)`
  && {
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50%;

    ${(props) => {
      switch (props.$variant) {
        case "primary":
          return variants.primary;
        case "secondary":
          return variants.secondary;
      }
    }}
  }
`;
