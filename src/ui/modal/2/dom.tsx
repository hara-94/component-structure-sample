import { styled } from "styled-components";
import { HStack } from "~/ui/common/HStack";
import { BaseButton } from "~/ui/button/base";
import { BaseModalElements } from "~/ui/modal/base/dom";
import { BaseModalProps } from "~/ui/modal/base/types";

const T2Header = styled(BaseModalElements.Header)<BaseModalProps>`
  background: linear-gradient(#e66465, #9198e5);

  ${(props) => {
    switch (props.size) {
      case "xl":
        return "95%";
      default:
        return "fit-content";
    }
  }}
`;

export const T2ModalDom = (props: BaseModalProps) => {
  return (
    <>
      <BaseModalElements.Overlay />
      <BaseModalElements.Modal {...props}>
        <T2Header>{props.headerContent}</T2Header>
        <BaseModalElements.Body>{props.bodyContent}</BaseModalElements.Body>
        <BaseModalElements.Footer>
          <HStack $justify="flex-end">
            <BaseButton $variant="primary">{props.footerLabel}</BaseButton>
            <BaseButton $variant="secondary" onClick={props.onClickCancel}>
              {props.footerCancelLabel}
            </BaseButton>
          </HStack>
        </BaseModalElements.Footer>
      </BaseModalElements.Modal>
    </>
  );
};
