import { BaseButtonDom } from "~/ui/Button/base/dom";
import { BaseButtonProps } from "~/ui/Button/base/types";
import { useBaseButton } from "~/ui/Button/base/logic";

export const BaseButton = (props: BaseButtonProps) => {
  const logic = useBaseButton(props);

  return <BaseButtonDom {...props}></BaseButtonDom>;
};
