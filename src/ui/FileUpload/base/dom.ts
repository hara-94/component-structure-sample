import { styled } from "styled-components";
import { common } from "~/ui/FileUpload/base/style";

const Button = styled.button`
  ${common.button}
`;

const Input = styled.input`
  ${common.input}
`;

const Label = styled.p`
  ${common.label}
`;

// componentを構築するのに必要なDOMを定義する
// 各DOMにlogicをあてたりするのでここでは組み立てない
// 拡張子を.tsにしておくことでJSX.Elementをexportさせない
export const BaseFileUploadElement = {
  Button,
  Input,
  Label,
};
