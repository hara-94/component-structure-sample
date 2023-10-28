import { BaseButtonDom } from "~/ui/button/base/dom";
import { BaseButtonProps } from "~/ui/button/base/types";
import { useBaseButton } from "~/ui/button/base/logic";

export const BaseButton = (props: BaseButtonProps) => {
  const logic = useBaseButton(props);

  return <BaseButtonDom {...props}></BaseButtonDom>;
};
