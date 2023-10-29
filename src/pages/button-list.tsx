import { HStack } from "~/ui/common/HStack";
import { VStack } from "~/ui/common/VStack";
import { H1 } from "~/ui/common/H1";
import { H2 } from "~/ui/common/H2";
import { BaseButton } from "~/ui/Button/base";
import { Button2 } from "~/ui/Button/2";

// とにかくlogic, style, domを分離する
const PageButtonList = () => {
  return (
    <VStack $align="center" $gap={20} $padding="20px">
      <H1>ボタン一覧</H1>
      <VStack $gap={32}>
        <VStack $gap={16}>
          <H2>ベースのボタン</H2>
          <HStack>
            <BaseButton $variant="primary">Button</BaseButton>
            <BaseButton $variant="secondary">Button</BaseButton>
          </HStack>
        </VStack>
        <VStack $gap={16}>
          <H2>styleのみ違うボタン</H2>
          <HStack>
            <Button2 $variant="primary">Button</Button2>
            <Button2 $variant="secondary">Button</Button2>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default PageButtonList;
