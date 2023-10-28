import styled from "styled-components";

import { HStack } from "~/ui/common/HStack";
import { VStack } from "~/ui/common/VStack";
import { H1 } from "~/ui/common/H1";
import { H2 } from "~/ui/common/H2";
// import { Button } from "~/ui/button/base";
// import { T2Button } from "~/ui/button/2";
// import { T3Button } from "~/ui/button/3";

// とにかくlogic, style, domを分離する
const PageButtonList = () => {
  return (
    <VStack $align="center" $padding="20px">
      <H1>ボタン一覧</H1>
      {/* <VStack $gap={32}>
        <VStack>
          <StyledH2>ベースのボタン</StyledH2>
          <HStack>
            <Button $variant="primary">Button</Button>
            <Button $variant="secondary">Button</Button>
          </HStack>
        </VStack>
        <VStack>
          <StyledH2>propsだけでは厳しいレベルでstyleのみが違うボタン</StyledH2>
          <HStack>
            <T2Button $variant="primary">Button</T2Button>
            <T2Button $variant="secondary">Button</T2Button>
          </HStack>
        </VStack>
        <VStack>
          <StyledH2>DOM構造のみ違うボタン</StyledH2>
          <HStack>
            <T3Button $variant="primary">Button</T3Button>
            <T3Button $variant="secondary">Button</T3Button>
          </HStack>
        </VStack>
      </VStack> */}
    </VStack>
  );
};

export default PageButtonList;
