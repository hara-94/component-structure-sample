import { VStack } from "~/ui/common/VStack";
import { HStack } from "~/ui/common/HStack";
import { H1 } from "~/ui/common/H1";
import { BaseFileUpload } from "~/ui/FileUpload/base";
import { FileUpload2 } from "~/ui/FileUpload/2";

const PageFileUpload = () => {
  return (
    <VStack $padding="40px">
      <H1>ファイルアップロード一覧</H1>
      <VStack $gap={32}>
        <HStack>
          <BaseFileUpload
            label="ラベルです"
            acceptableExtensions={[".png", ".jpg"]}
            maxFileMb={10}
          />
        </HStack>
        <HStack>
          <FileUpload2 acceptableExtensions={[".png", ".jpg"]} maxFileMb={10} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default PageFileUpload;
