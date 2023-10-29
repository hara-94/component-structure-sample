import { styled } from "styled-components";
import { common, buttonVariants } from "~/ui/FileUpload/2/style";
import { ButtonProps } from "~/ui/FileUpload/2/types";

const Input = styled.input`
  ${common.input}
`;

const Button = styled.button<ButtonProps>`
  ${common.button}

  ${(props) => buttonVariants[props.$variant]}
`;

const Display = styled.div`
  ${common.display}
`;

export const FileUpload2Elements = {
  Input,
  Button,
  Display,
};
