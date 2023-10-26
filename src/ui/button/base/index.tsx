import styled, { css } from "styled-components";
import { useButton } from "~/ui/button/base/logic";
import { ButtonProps } from "~/ui/button/base/types";

// こいつらをexportするかどうかは検討の余地あり
// 例えば、DOMが違うロジックを共有するボタンを定義したときに、
// baseのstyledはこのvariantsを使いたいとかはあるかもしれない
// 🚀----style----🚀
const common = css`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
`;
const variants = {
  primary: css`
    background-color: lightblue;
    color: white;
  `,
  secondary: css`
    background-color: white;
    color: lightblue;
    border: 2px solid lightblue;
  `,
};
//----------------------------------

const StyledButton = styled.button<ButtonProps>`
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

export const Button = (props: ButtonProps) => {
  const logic = useButton(props);

  return (
    <StyledButton {...logic.generalizedProps}>
      {props.$isError ? "再試行" : props.children}
    </StyledButton>
  );
};
