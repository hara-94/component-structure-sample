import { styled } from "styled-components";
import { BaseButton } from "~/ui/Button/base";
import { HStack } from "~/ui/common/HStack";
import { BaseModalProps } from "~/ui/modal/base/types";
import { common, size } from "~/ui/modal/base/style";

const Modal = styled.div<BaseModalProps>`
  ${common.modal}

  width: ${(props) => {
    switch (props.size) {
      case "xl":
        return size.xl;
      case "md":
        return size.md;
      case "sm":
        return size.sm;
    }
  }};
`;

const Overlay = styled.div`
  ${common.overlay}
`;

const Header = styled.div`
  ${common.header}
`;

const Body = styled.div`
  ${common.body}
`;

const Footer = styled.div`
  ${common.footer}
`;

export const BaseModalDom = (props: BaseModalProps) => {
  return (
    <>
      <Overlay />
      <Modal {...props}>
        <Header>{props.headerContent}</Header>
        <Body>{props.bodyContent}</Body>
        <Footer>
          {/* NOTE: これより下のDOM構造をコンポーネントで定義して、BaseModalElementsとして
                    共通化してexportした方がいい
          　　　　　　styleのみ違うコンポーネントの場合に、ここだけ各コンポーネント内で
          　　　　　　ハードコードだと、管理コストが増加するため
                    だけど、そこまでやるの割と仰々しい気もしていて悩み中
           */}
          <HStack $justify="flex-end">
            <BaseButton $variant="primary">{props.footerLabel}</BaseButton>
            <BaseButton $variant="secondary" onClick={props.onClickCancel}>
              {props.footerCancelLabel}
            </BaseButton>
          </HStack>
        </Footer>
      </Modal>
    </>
  );
};

// やるならこんな感じ
// const FooterContent = (props: BaseModalProps) => {
//   return (
//     <HStack $justify="flex-end">
//       <BaseButton $variant="primary">{props.footerLabel}</BaseButton>
//       <BaseButton $variant="secondary" onClick={props.onClickCancel}>
//         {props.footerCancelLabel}
//       </BaseButton>
//     </HStack>
//   );
// };

export const BaseModalElements = {
  Overlay,
  Modal,
  Header,
  Body,
  Footer,
  // FooterContent
};
