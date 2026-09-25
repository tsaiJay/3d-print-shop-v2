# 客製預覽（試用）

客人上傳 logo，按預覽後疊在白瓷馬克杯的印刷區上。滿意後按「就這個，放入購物車」：預覽圖和客人的圖會在瀏覽器裡壓成較小的 JPEG，連同位置寫進這一杯的購物選項，不用另外傳檔。

- 後台路徑：頁面 > 自訂頁面 > 原始碼
- 頁面標題：客製預覽
- 前台：https://tsaijlab.qdm.tw/pages/custompreview
- SEO 友善網址：`custompreview`（不用 `-`）
- 頁面狀態：啟用
- 網站頁尾顯示：有（商店訊息裡看得到「客製預覽」）
- 同步狀態：已同步 (2026-09-25)
- 上次貼上日期：2026-09-25

試用品項：白瓷馬克杯（客製試用），商品 id 10，售價 $1，前台 https://tsaijlab.qdm.tw/product/mugcustom 。購物選項：印刷位置（id 2，單行文字）、預覽圖（id 3，多行文字）、客人圖檔（id 4，多行文字），三項都必填。

杯子和測試 logo 用站內相對路徑 `/image/data/mug_blank.jpg`、`/image/data/logo_sample.png`。寫成完整網址時，前台會改寫到 CDN，畫布就無法壓圖。圖庫 CDN 網址仍登記在 `assets/manifest.md`。

全站 CSS／JS（把購物車裡的 JPEG 文字顯示成圖、並在商品頁改導向這頁）本機已寫在 `layout/store.css`、`layout/store.js`，前台尚未發佈。購物車目前會看到位置文字，以及兩段 JPEG 的 base64。

本機試用：用瀏覽器開啟 `pages/custom-preview/content.html`（圖檔仍用相對路徑，不會送出購物車）。

印刷區是杯子底圖上的比例，寫在程式的 `PRINT`（左、上、寬、高）。換底圖時要重對這個框。
