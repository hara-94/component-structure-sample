## WIP: コンポーネント設計思想PoC

### 想定しているコンポーネントのバリエーション
- ベースとなるStyle, DOM, Logicを持つコンポーネント(Base Component)
- Base ComponentとStyleのみ違うコンポーネント
- Base ComponentとDOMのみ違うコンポーネント
- Base ComponentとLogicのみ違うコンポーネント

### Style/DOM/Logicをとにかく疎結合に保つ
- Style
- DOM
- Logic
### 設計・書き方を統一するための自動生成
