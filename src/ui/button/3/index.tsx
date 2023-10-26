import styled, { css } from "styled-components";

import { useButton } from "~/ui/button/base/logic";
import { ButtonProps } from "~/ui/button/base/types";
import { VStack } from "~/ui/common/VStack";

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

const StyledP = styled.p`
  font-size: 12px;
  padding: 4px;
  border-radius: 4px;
  text-align: center;;
  border: 1px solid lightgray;
`;

// ロジック同じでDOMが違うボタン
// 本来ならこの程度は全く別のコンポーネントとして定義できるが
// あくまで例として
// DOMだけ違うパターンは、いわゆるatom層ではほぼ起きない(一つのDOMを返してるだけなので構造とかない)
export const T3Button = (props: ButtonProps) => {
  // DOMが違うだけなのでロジックは共有
  const logic = useButton(props);

  return (
    <VStack $gap={2}>
      <StyledButton {...logic.generalizedProps} />
      <StyledP>ラベル</StyledP>
    </VStack>
  );
};
