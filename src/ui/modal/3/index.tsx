import { useBaseModal } from "~/ui/modal/base/logic";
import { BaseModalProps } from "~/ui/modal/base/types";
import { T3ModalDom } from "~/ui/modal/3/dom";

export const T3Modal = (props: BaseModalProps) => {
  const logic = useBaseModal(props);

  return <>{props.isOpen && <T3ModalDom {...props} />}</>;
};
