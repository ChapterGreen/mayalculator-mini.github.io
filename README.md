アプリケーションのリンク: [mayalculator-mini](https://chaptergreen.github.io/mayalculator-mini.github.io/)

# 使い方

## 日付入力欄

### 数字の範囲

- **年:** 1 - 9999(紀元前は無し)
- **月:** 1 - 12
- **日:** 1 - (その月の最終日)

範囲を超える入力はできない(具体的な動作は次の項目)

### 機能

数字と操作系(矢印, Enter, Space, Tab, Shift, BS, Del)のキーのみ入力を受け付ける。

- **矢印:**

  - 上下で数値をインクリメント/デクリメント

  - 最大値を超過する入力で次の年や月に変化

  - 最小値未満になる入力で前の年や月に変化

- **数字:**

  - 入力欄の最大値を超えると予想されるときは自動でフォーカスが移る

    年: 4桁の入力後
    月: 2桁の入力後 or 2 - 9を入力後

  - 最大値を超える入力は最大値に自動修正

    (例: 13月→12月、32日→30 or 31日)

- **Enter, Space, Tab:**

  次の欄へフォーカスを移動

- **Shift:**

  押している間はEnter, Space, Tabで前の欄へフォーカスを移動

## 結果のテーブル

紋章や城は、背景色が対応する色となっている

### ツォルキン

|Tzolkin|結果|
|---|---|
|KIN|1 - 260(黒、極性、絶対拡張)|
|SC|太陽の紋章|
|WS|ウェイブスペル|
|銀河の音|音 1 - 13|
|5つの城|東, 西, 南, 北, 中央|

### 相性比較表:

|KIN|結果|
|---|---|
|SC反対|SCから見た反対KIN|
|SC類似|〃 類似KIN|
|SC神秘|〃 神秘KIN|
|WS反対|WSから見た反対KIN|
|WS類似|〃 類似KIN|
|WS神秘|〃 神秘KIN|
|ガイド|ガイドKIN|
|逆ガイド|逆ガイドKIN|
|鏡KIN|鏡KINの番号(1 - 260)|
|鏡SC|〃 太陽の紋章|
|鏡WS|〃 ウェイブスペル|

### 古典マヤ暦表:

|生命樹法|||
|---|---|---|
||東||
|北|中央|南|
||西||

(ここだけ "**SC(英語)-銀河の音**" 表記となっている)

### 他の暦:

|他の暦|日付|
|---|---|
|Haab|月-日(0 - 19(Keyabのみ0 - 4))|

### 起承転結:

|起承転結|SC|
|---|---|
|起|赤|
|承|白|
|転|青|
|結|黄|

### 個人KIN年表:

|西暦<br/>(年齢)|SC|WS|銀河の音|
|---|---|---|---|
|生まれ年<br/>(0)|太陽の紋章|ウェイブスペル|音 1 - 13|
|生まれ年 + 1<br/>(1)|太陽の紋章|ウェイブスペル|音 1 - 13|
|...|...|...|...|
|生まれ年 + 103<br/>(103)|太陽の紋章|ウェイブスペル|音 1 - 13|
|生まれ年 + 104<br/>(104)|太陽の紋章|ウェイブスペル|音 1 - 13|

### KIN周期表:
|西暦|周期|
|---|---|
|年_月_日(誕生日から(260 * 15)日前)|-15周期|
|年_月_日(誕生日から(260 * 14)日前)|-14周期|
|...|...|
|年_月_日(誕生日から260日前)|-1周期|
|年_月_日|誕生日|
|年_月_日(誕生日から260日後)|+1周期|
|...|...|
|年_月_日(誕生日から(260 * 14)日後)|+14周期|
|年_月_日(誕生日から(260 * 15)日後)|+15周期|

**特別なケース:**

- **閏日:**

  **〇〇〇〇_2_29**<br/>
  **〇〇〇〇_3_1**<br/>
  と表記される

- **計算範囲外の日付:**

  計算範囲に収まるように周期の範囲が自動で調整される