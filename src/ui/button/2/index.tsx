import { Button2Dom } from "~/ui/Button/2/dom";
import { useBaseButton } from "~/ui/Button/base/logic";
import { BaseButtonProps } from "~/ui/Button/base/types";

export const Button2 = (props: BaseButtonProps) => {
  const logic = useBaseButton(props);

  return <Button2Dom {...props}></Button2Dom>;
};
