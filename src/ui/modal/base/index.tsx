import { useBaseModal } from "~/ui/modal/base/logic";
import { BaseModalProps } from "~/ui/modal/base/types";
import { BaseModalDom } from "~/ui/modal/base/dom";

export const BaseModal = (props: BaseModalProps) => {
  const logic = useBaseModal(props);

  return <>{props.isOpen && <BaseModalDom {...props} />}</>;
};
