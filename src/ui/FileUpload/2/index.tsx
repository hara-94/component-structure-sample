import { useEffect, useCallback, useRef } from "react";
import { VStack } from "~/ui/common/VStack";
import { HStack } from "~/ui/common/HStack";
import { useBaseFileUploadLogic } from "~/ui/FileUpload/base/logic";
import { FileUpload2Elements } from "~/ui/FileUpload/2/dom";
import { BaseFileUploadProps } from "~/ui/FileUpload/base/types";

export const FileUpload2 = (props: BaseFileUploadProps) => {
  const logic = useBaseFileUploadLogic(props);

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const delegateClickToInput = useCallback(() => {
    inputRef.current?.click();
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    button?.addEventListener("click", delegateClickToInput);

    return () => {
      button?.removeEventListener("click", delegateClickToInput);
    };
  }, [delegateClickToInput]);

  return (
    <VStack $align="center">
      <FileUpload2Elements.Input ref={inputRef} type="file" />
      <FileUpload2Elements.Display></FileUpload2Elements.Display>
      <HStack>
        <FileUpload2Elements.Button ref={buttonRef} $variant="add">
          Add
        </FileUpload2Elements.Button>
        <FileUpload2Elements.Button $variant="delete">
          Delete
        </FileUpload2Elements.Button>
      </HStack>
    </VStack>
  );
};
