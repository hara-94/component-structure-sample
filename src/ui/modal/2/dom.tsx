import { styled } from "styled-components";
import { HStack } from "~/ui/common/HStack";
import { BaseButton } from "~/ui/Button/base";
import { BaseModalElements } from "~/ui/modal/base/dom";
import { BaseModalProps } from "~/ui/modal/base/types";
import { common, size } from "~/ui/modal/2/style";

const T2Modal = styled(BaseModalElements.Modal)`
  ${(props) => size[props.size]}
`;

const T2Header = styled(BaseModalElements.Header)<BaseModalProps>`
  ${common}
`;

export const T2ModalDom = (props: BaseModalProps) => {
  return (
    <>
      <BaseModalElements.Overlay />
      <T2Modal {...props}>
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
      </T2Modal>
    </>
  );
};
