# 分支說明

一間 QDM 商店（或一種用途）一條分支。`main` 是中性基底；商店分支在根目錄放 `BRANCH.md`，記錄那間店專屬的設定與規則。

## 分支一覽

| 分支 | 屬性 | 商店 | 容錯 |
| --- | --- | --- | --- |
| `main` | 中性基底：QDM 通用規則、範本、文件 | 無 | 只放通用內容 |
| `qdm-tsai` | 測試場（playground）：新做法先在這裡試、做紀錄 | tsaijlab.qdm.tw（測試店） | 最高，可直接改線上 |
| `qdm-sumi` | 與客戶合作的正式網站 | sumibostudio.qdm.tw | 低，動線上前先確認 |
| `archive/first-demo` | 封存的第一版示範，只在本機 | tsaijlab.qdm.tw | 不再開發 |

各分支的入口、角色、權限與規則，以該分支的 `BRANCH.md` 為準。

## 合併方向

- 通用規則（`AGENTS.md`、`docs/`、`snippets-index.md` 的說明段、`.gitignore`、skills）改在 `main`，再合併進各商店分支
- 商店分支不合併回 `main`，商店分支之間也不互相合併
- `qdm-tsai` 試成功的做法要用到正式店：把片段複製到 `qdm-sumi` 重新整理，網址、圖庫 URL、商品 id、選項 id 都要改成該店的，再走一次同步流程
- 試出來的經驗若是 QDM 通用知識（平台限制、貼碼位置、選擇器），整理進 `main` 的 `docs/qdm-layout-reference.md`

## 開新商店分支

1. 從 `main` 開：`git switch -c qdm-<名稱> main`
2. 根目錄新增 `BRANCH.md`，至少寫：屬性、前台／後台入口、帳號角色與可進模組、容錯與 commit 規則
3. 帳密寫在本機 `account/`，不要寫進 `BRANCH.md`
4. 在本表加一列（改在 `main`）
