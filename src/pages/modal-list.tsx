import { useModal } from "~/hooks/useModal";
import { HStack } from "~/ui/common/HStack";
import { VStack } from "~/ui/common/VStack";
import { H1 } from "~/ui/common/H1";
import { BaseModal } from "~/ui/modal/base";
import { T2Modal } from "~/ui/modal/2";
import { BaseButton } from "~/ui/button/base";

const PageModalList = () => {
  const { isOpen: isOpen1, open: open1, close: close1 } = useModal();
  const { isOpen: isOpen2, open: open2, close: close2 } = useModal();
  const { isOpen: isOpen3, open: open3, close: close3 } = useModal();
  const { isOpen: isOpen4, open: open4, close: close4 } = useModal();
  const { isOpen: isOpen5, open: open5, close: close5 } = useModal();

  return (
    <VStack $padding="40px" $gap={32}>
      <H1>モーダル一覧</H1>
      <HStack>
        <BaseButton $variant="primary" onClick={open1}>
          open1
        </BaseButton>
        <BaseButton $variant="secondary" onClick={open2}>
          open2
        </BaseButton>
        <BaseButton $variant="primary" onClick={open3}>
          open3
        </BaseButton>
        <BaseButton $variant="secondary" onClick={open4}>
          open4
        </BaseButton>
        <BaseButton $variant="primary" onClick={open5}>
          open5
        </BaseButton>
        <BaseButton $variant="secondary">open6</BaseButton>
        <BaseButton $variant="primary">open7</BaseButton>
        <BaseButton $variant="secondary">open8</BaseButton>
      </HStack>
      <BaseModal
        isOpen={isOpen1}
        size="xl"
        headerContent="サイズ:xl"
        bodyContent={
          <div>
            size = xlのモーダルです。
            <br />
            size = xlのモーダルです。size = xlのモーダルです。
            <br />
            size = xlのモーダルです。size = xlのモーダルです。
          </div>
        }
        footerLabel="click"
        footerCancelLabel="キャンセル"
        onClickCancel={close1}
      />
      <BaseModal
        isOpen={isOpen2}
        size="md"
        headerContent="サイズ:md"
        bodyContent={
          <div>
            size = mdのモーダルです。
            <br />
            size = mdのモーダルです。size = mdのモーダルです。
            <br />
            size = mdのモーダルです。size = mdのモーダルです。
          </div>
        }
        footerLabel="click"
        footerCancelLabel="キャンセル"
        onClickCancel={close2}
      />
      <BaseModal
        isOpen={isOpen3}
        size="sm"
        headerContent="サイズ:sm"
        bodyContent={
          <div>
            size = smのモーダルです。
            <br />
            size = smのモーダルです。size = smのモーダルです。
            <br />
            size = smのモーダルです。size = smのモーダルです。
          </div>
        }
        footerLabel="click"
        footerCancelLabel="キャンセル"
        onClickCancel={close3}
      />
      <T2Modal
        isOpen={isOpen4}
        size="sm"
        headerContent="T2 サイズ:sm"
        bodyContent={
          <div>
            styleのみ違うモーダルです。
            <br />
            size = smのモーダルです。
            <br />
            size = smのモーダルです。size = smのモーダルです。
            <br />
            size = smのモーダルです。size = smのモーダルです。
          </div>
        }
        footerLabel="click"
        footerCancelLabel="キャンセル"
        onClickCancel={close4}
      />
      <T2Modal
        isOpen={isOpen5}
        size="xl"
        headerContent="T2 サイズ:xl"
        bodyContent={
          <div>
            styleのみ違うモーダルです。
            <br />
            size = xlのモーダルです。
            <br />
            size = xlのモーダルです。size = xlのモーダルです。
            <br />
            size = xlのモーダルです。size = xlのモーダルです。
          </div>
        }
        footerLabel="click"
        footerCancelLabel="キャンセル"
        onClickCancel={close5}
      />
    </VStack>
  );
};

export default PageModalList;
