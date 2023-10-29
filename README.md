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
  - style.tsから各styleをimportしてきて、styleをあてたDOMを返す。ロジックは持たず、受け取ったPropsをそのままDOMに渡す
- index.tsx
  - dom.tsとlogic.tsを組み合わせて、実際に使用するコンポーネントを返す

## 設計・書き方を統一するための自動生成
