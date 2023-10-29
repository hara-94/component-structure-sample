import { VStack } from "~/ui/common/VStack";
import { HStack } from "~/ui/common/HStack";
import { H1 } from "~/ui/common/H1";
import { BaseFileUpload } from "~/ui/FileUpload/base";

const PageFileUpload = () => {
  return (
    <VStack $padding="40px">
      <H1>ファイルアップロード</H1>
      <VStack>
        <HStack>
          <BaseFileUpload
            label="ラベルです"
            acceptableExtensions={[".png", ".jpg"]}
            maxFileMb={10}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default PageFileUpload;
