import { ChangeEventHandler } from "react";

export type BaseFileUploadProps = {
  label?: string;
  maxFileMb: number;
  acceptableExtensions: string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
