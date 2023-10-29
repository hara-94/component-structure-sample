import { useCallback } from "react";
import { BaseFileUploadProps } from "~/ui/FileUpload/base/types";

export const useBaseFileUploadLogic = (props: BaseFileUploadProps) => {
  const validateFileSizeAndAlertIfNeeded = useCallback(
    (file: File) => {
      if (file.size > props.maxFileMb) {
        alert(`ファイルサイズは${props.maxFileMb}以下にしてください`);
      }
    },
    [props.maxFileMb]
  );

  return { validateFileSizeAndAlertIfNeeded };
};
