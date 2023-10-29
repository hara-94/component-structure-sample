import { useCallback, useEffect, useRef } from "react";
import { VStack } from "~/ui/common/VStack";
import { BaseFileUploadProps } from "~/ui/FileUpload/base/types";
import { BaseFileUploadElement } from "~/ui/FileUpload/base/dom";
import { useBaseFileUploadLogic } from "~/ui/FileUpload/base/logic";

export const BaseFileUpload = (props: BaseFileUploadProps) => {
  // logicは外に切り出しておく
  const logic = useBaseFileUploadLogic(props);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const delegateClickToInput = useCallback(() => {
    inputRef.current?.click();
  }, []);

  // NOTE: こういうのlogicとしてまとめるかは悩み中
  useEffect(() => {
    const button = buttonRef.current;
    button?.addEventListener("click", delegateClickToInput);
    return () => {
      button?.removeEventListener("click", delegateClickToInput);
    };
  }, [delegateClickToInput]);

  // dom.tsで定義したdomを組み立てて、logicをあてる
  return (
    <VStack>
      <BaseFileUploadElement.Input
        ref={inputRef}
        type="file"
        accept={props.acceptableExtensions.join(", ")}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            logic.validateFileSizeAndAlertIfNeeded(file);
          }
          props.onChange?.(e);
        }}
      />
      <BaseFileUploadElement.Button ref={buttonRef} />
      {props.label && (
        <BaseFileUploadElement.Label>{props.label}</BaseFileUploadElement.Label>
      )}
    </VStack>
  );
};
