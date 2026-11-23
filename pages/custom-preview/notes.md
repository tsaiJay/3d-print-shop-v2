# 客製預覽（試用）

客人上傳圖檔，或按「用測試 logo」，logo 會直接疊在白瓷馬克杯的印刷區上，沒有獨立的預覽按鈕。滿意後按「就這個，寄出並下單」：原始圖檔和預覽 PNG 由店家 Gmail（Google Apps Script）寄出，並產生一組編號（例如 `CP-7K3Q`）。同一組編號寫進購物車這一杯的印刷位置，用來和信件對上。QDM 訂單編號要結帳完成才會出現，所以對信用的是這組編號，不是平台訂單號。

- 後台路徑：頁面 > 自訂頁面 > 原始碼
- 頁面標題：客製預覽
- 前台：https://tsaijlab.qdm.tw/pages/custompreview
- SEO 友善網址：`custompreview`（不用 `-`）
- 頁面狀態：啟用
- 網站頁尾顯示：有（商店訊息裡看得到「客製預覽」）
- 同步狀態：已同步 (2026-10-24)
- 上次貼上日期：2026-10-24

試用品項：白瓷馬克杯（客製試用），商品 id 10，售價 $1，前台 https://tsaijlab.qdm.tw/product/mugcustom 。購物選項：印刷位置（id 2，單行文字）、預覽圖（id 3，多行文字）、客人圖檔（id 4，多行文字），三項都必填。下單時印刷位置寫「編號＋大小左右上下」，另外兩欄只寫「見郵件」加同一組編號。

寄信是 Gmail／Apps Script。收件人固定在 `pages/custom-preview/apps-script.js`，是 tsaijbj4@gmail.com，不從頁面傳。頁面的 `GAS_URL`、`GAS_SECRET` 與程式裡的 `SECRET` 在 repo 裡是空字串，實際值只放本機 `account/env`（`TSAI_CUSTOM_PREVIEW_*`），貼上前再填入；線上版本已於 2026-10-23 填好貼上。密鑰寫在公開頁面的程式裡，看前台原始碼就能取得，只能擋隨手亂打，不是真的保密。

實測：2026-10-24 前台按下「就這個，寄出並下單」後，tsaijbj4@gmail.com 收到信件與附件。此方式可行。對單仍靠購物車裡的 `CP-` 編號。

部署（用 tsaijbj4@gmail.com 自己做，不要把網址或密鑰寫進對話）：

1. 用 tsaijbj4@gmail.com 打開 script.google.com，新專案，貼上 `apps-script.js`。
2. 部署 → 新增部署 → 網頁應用程式。執行身分「自己」，存取權「所有人」（不要選「任何人（須登入 Google）」，否則客人要先登入）。
3. 授權時若出現未經驗證，選進階後仍繼續。這支程式只替這個 Gmail 寄信。
4. 複製 /exec 網址。密鑰自己定一組，寫進程式常數 `SECRET`，也填進頁面的 `GAS_SECRET`。兩邊要相同。網址與密鑰記到 `account/env`，不要 commit 進 repo。
5. 改過程式後要部署新版本，舊網址才會更新。
6. 一般 Gmail 每天約 100 封，單封附件合計 25MB。

杯子和測試 logo 用站內相對路徑 `/image/data/mug_blank.jpg`、`/image/data/logo_sample.png`。寫成完整網址時，前台會改寫到 CDN，畫布就無法壓圖。圖庫 CDN 網址仍登記在 `assets/manifest.md`。

這版購物車不再塞 JPEG，只留編號。全站 CSS／JS（把舊版 base64 畫成縮圖、並在商品頁改導向這頁）仍在 `layout/store.css`、`layout/store.js`，前台尚未發佈。線上舊頁還沒換掉之前，購物車仍會看到兩段 JPEG 文字。

本機試用：用瀏覽器開啟 `pages/custom-preview/content.html`（圖檔仍用相對路徑，不會送出購物車）。

印刷區是杯子底圖上的比例，寫在程式的 `PRINT`（左、上、寬、高）。換底圖時要重對這個框。
