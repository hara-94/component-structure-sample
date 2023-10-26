import { ButtonProps } from "~/ui/button/types";

// buttonコンポーネントのロジック
// 特定のコンポーネントのDOMやstyleに絶対に依存させてはならない。絶対に
// どんなDOM構造やstyleを持っていたとしても使用できるロジックを書く
// ここに特定のコンポーネントに依存したロジックを書いた途端に破綻します
// フロント、サーバーどちらでも動くという制約は流石に厳しい
export const useButton = (props: ButtonProps) => {
  const hogeLogic = () => {
    alert("hoge");
  };

  const generalizedProps: ButtonProps = {
    ...props,
    onClick: (e) => {
      hogeLogic();
      props.onClick?.(e);
    },
  };

  return { hogeLogic, generalizedProps };
};
