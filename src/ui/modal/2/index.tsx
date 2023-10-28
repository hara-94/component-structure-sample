import { useBaseModal } from "~/ui/modal/base/logic";
import { BaseModalProps } from "~/ui/modal/base/types";
import { T2ModalDom } from "~/ui/modal/2/dom";

export const T2Modal = (props: BaseModalProps) => {
  const logic = useBaseModal(props);

  return <>{props.isOpen && <T2ModalDom {...props} />}</>;
};
