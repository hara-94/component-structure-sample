import { styled } from "styled-components";
import { HStack } from "~/ui/common/HStack";
import { BaseButton } from "~/ui/button/base";
import { BaseModalProps } from "~/ui/modal/base/types";
import { BaseModalElements } from "~/ui/modal/base/dom";
import { common } from "~/ui/modal/3/style";

const Header = styled.div<BaseModalProps>`
  ${common.header}
`;

const Footer = styled.div<BaseModalProps>`
  ${common.footer}
`;

const FooterImg = styled.img`
  width: 50px;
  height: auto;
`;

export const T3ModalDom = (props: BaseModalProps) => {
  return (
    <>
      <BaseModalElements.Overlay />
      <BaseModalElements.Modal {...props}>
        <Header {...props}>{props.headerContent}</Header>
        <BaseModalElements.Body>{props.bodyContent}</BaseModalElements.Body>
        <Footer {...props}>
          <HStack>
            {/* NOTE: ここのDOMがbaseと違う */}
            <BaseButton $variant="primary" onClick={props.onClick}>
              click
            </BaseButton>
            <FooterImg src="https://placehold.jp/150x80.png" alt="画像" />
            <BaseButton $variant="secondary" onClick={props.onClickCancel}>
              cancel
            </BaseButton>
          </HStack>
        </Footer>
      </BaseModalElements.Modal>
    </>
  );
};
