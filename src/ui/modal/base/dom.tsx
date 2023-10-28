import { styled } from "styled-components";
import { BaseButton } from "~/ui/button/base";
import { HStack } from "~/ui/common/HStack";
import { BaseModalProps } from "~/ui/modal/base/types";

const Modal = styled.div<BaseModalProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: white;

  width: ${(props) => {
    switch (props.size) {
      case "xl":
        return "80%";
      case "md":
        return "50%";
      case "sm":
        return "30%";
    }
  }};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: black;
  opacity: 0.3;
`;

const Header = styled.div`
  padding: 16px 8px;
`;

const Body = styled.div`
  padding: 16px;
`;

const Footer = styled.div`
  padding: 16px 8px;
`;

export const BaseModalDom = (props: BaseModalProps) => {
  return (
    <>
      <Overlay />
      <Modal {...props}>
        <Header>{props.headerContent}</Header>
        <Body>{props.bodyContent}</Body>
        <Footer>
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

export const BaseModalElements = {
  Overlay,
  Modal,
  Header,
  Body,
  Footer,
};
