# WIP: コンポーネント設計思想PoC

## 基本的な設計
### DOMが一個の場合(Atom層にあたる)
```
src
└ ui
  └ Button
    └ base
      └ types.ts
      └ style.ts
      └ logic.ts
      └ dom.ts
      └ index.tsx
```
#### 各ファイルの責務
- types.ts
  - Propsや、それに付随する型定義
- style.ts
  - DOMに当てるcssの定義
- logic.ts
  - コンポーネントが持ちうる全てのロジックをobjectで返す。**特定のDOMやstyleに依存しないようにロジックを記述する**
- dom.ts
  - style.tsから各styleをimportしてきて、styleをあてたDOMを返す。
- index.tsx
  - dom.tsとlogic.tsを組み合わせて、実際に使用するコンポーネントを返す

### DOMが複数の場合(Molecule以上)
```
src
└ ui
  └ FileUpload
    └ base
      └ types.ts
      └ style.ts
      └ logic.ts
      └ dom.ts
      └ index.tsx
```
#### 各ファイルの責務
- types.ts
  - Propsや、それに付随する型定義
- style.ts
  - DOMに当てるcssの定義
- logic.ts
  - コンポーネントが持ちうる全てのロジックをobjectで返す。**特定のDOMやstyleに依存しないようにロジックを記述する**
- dom.ts
  - style.tsから各styleをimportしてきて、styleをあてたDOMを返す。このファイル内では個々のDOMをそれぞれexportする(このcomponent専用のAtomを作るイメージ)
    <br />
    ここで組み立ててしまうと、Props以外のlogicを各DOMに割り当てるのが面倒になるのと、各DOMのstyleを上書きしたバリエーションを作れなくなってしまうため
- index.tsx
  - dom.tsとlogic.tsを組み合わせて、実際に使用するコンポーネントを返す
## 拡張component
上記の設計はベースとなるcomponentの設計。考えられるバリエーションとして、
- styleが違う
- DOMが違う
- Logicが違う
のそれぞれを組み合わせたパターンがある(**拡張component**)
<br />
ベースのcomponentの設計が、それぞれを可能な限り疎結合にしているので、拡張componentを作る際は、必要なファイルのみ作り、共有すべきものはベースのcomponentからimportしてくる(場合によっては同じ挙動でも別のものとして定義したほうがいいこともあるので、そこら辺は実装時に判断する)

### 例1: styleのみ違う場合
固有フォルダに`style.ts`, `dom.ts`, `index.tsx`のみ作り、base/dom.tsのstyled-componentをstyled関数で上書きする
```
src
└ ui
  └ Button
    └ 2
      └ style.ts
      └ dom.ts
      └ index.tsx
------------------------------------------

// dom.ts
import { styled } from "styled-components";
import { BaseButtonDom } from "~/ui/Button/base/dom";
import { common, variants } from "~/ui/Button/2/style";

export const Button2Dom = styled(BaseButtonDom)`
  // NOTE: baseのcssを上書くために詳細度を上げる
  && {
    ${common}

    ${(props) => variants[props.$variant]}
  }
`;
```
DOMを複数持つcomponentでも同じく、`style.ts`, `dom.ts`, `index.tsx`を作り、base/dom.tsからパーツとなるDOMをimportしてきて、それぞれをstyled関数で上書きする
### 例2: DOMのみ違う場合(DOMを複数もつcomponentのみ)
固有フォルダに`style.ts`, `dom.ts`, `index.tsx`のみ作り、`style.ts`, `dom.ts`に独自のDOMとstyleを定義して、index.tsxで組み合わせる。
```
src
└ ui
  └ FileUpload
    └ 2
      └ style.ts
      └ dom.ts
      └ index.tsx
------------------------------------------

// dom.ts
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
```
## メンタルモデル
componentを構成しているファイルが多いので複雑に見えますが、Vueに置き換えると、
- dom.ts -> vueファイル
- style.ts -> scssファイル
- index.tsx -> tsファイル
のようなイメージです。
<br />
dom/logic/styleは基本的にはそれぞれ独立しています。言い換えるとこれらのパーツを好きに組み合わせることでcomponentを作れるような状態を目指しています。
<br />
(domとstyleは密接な関係にあるので完全に切り離すことはむずがしいですが、、)
<br />
dom/logic/styleはそれぞれ依存関係を持ちませんが、それぞれはcomponentのPropsの型に依存しています。Propsの型がそのcomponentの挙動/仕様を定義しているからです。
<br />
つまり、Propsの型を定義するということはバリエーションを増やすのではなく、componentを新しく定義することを意味するので、Propsの型定義は必ず`/base/types.ts`に存在することになります。

## 設計・書き方を統一するための自動生成
componentを構成するファイルが多く、ある程度の書き方も決まっているため、baseコンポーネントの作成時は自動生成を使用する予定

## 課題
- DOMが違うバリエーションで使わないPropsが出てきた場合
  - `DOMが違う` = `表示するデータが違う`、であり、`表示するデータが違う`は場合によっては`データ構造が違う`になり、`データ構造が違う` = `挙動/仕様が違う` = `Propsの型が違う`、なので、DOMが違うバリエーションにおいて必要になるプロパティが増えたり、逆に参照しないプロパティが出てきてしまう。
  - 参照しないプロパティを毎回optionalにするのも既存compnentへの影響が面倒だし、必要になるプロパティを増やすのは、つまり既存componentにとって参照しないプロパティができることを意味している。参照しないプロパティが増えるのは、そのcomponentの実装者ではない人が使用する場合にcomponentの内部実装を気にしながら使うことを強制するのでDXが良くない
- Propsでカバーするか拡張componentにするか悩む
