# 素材對照表（manifest）

本機原檔 ↔ QDM 圖庫 URL ↔ 用在哪些片段。

為什麼要這張表：QDM 圖庫一旦上傳，**檔名不能改、資料夾不能搬**，改了前台舊連結就失效。所以每張圖都要能反查「線上 URL 是哪個、被哪些片段引用」，換圖或重傳前先看這裡評估影響。

## 怎麼用

1. 原檔放 `assets/images/`（英文檔名，避免 `-`、`&`、中文與空白）。
2. 上傳到 QDM 圖庫（商品 > 圖庫與上傳）後，把圖庫 URL 貼回下表。
3. 片段裡引用該圖時，用圖庫 URL，並在「用在哪些片段」欄補上片段路徑。
4. 要換圖：優先「新增一張新檔＋新 URL」再改片段引用，不要期待覆蓋舊 URL。

## 對照表

| 本機原檔 | 圖庫 URL | 用在哪些片段 | 上傳日期 | 備註 |
| --- | --- | --- | --- | --- |
| `assets/images/hero_market.jpg` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/hero_market.jpg` | `layout/html-boxes/home-landing/content.html` | 2026-09-24 | 首頁主視覺 |
| `assets/images/promo_season.jpg` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/promo_season.jpg` | `layout/html-boxes/home-landing/content.html` | 2026-09-24 | 新品上市卡 |
| `assets/images/promo_welcome.jpg` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/promo_welcome.jpg` | `layout/html-boxes/home-landing/content.html` | 2026-09-24 | 日常食材卡 |
| `assets/images/veg_tomato.jpg` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/veg_tomato.jpg` | `layout/html-boxes/home-landing/content.html` | 2026-09-24 | 紅番茄 |
| `assets/images/veg_carrot.jpg` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/veg_carrot.jpg` | `layout/html-boxes/home-landing/content.html` | 2026-09-24 | 橙蘿蔔 |
| `assets/images/veg_cabbage.jpg` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/veg_cabbage.jpg` | `layout/html-boxes/home-landing/content.html` | 2026-09-24 | 高麗菜 |
| `assets/images/veg_corn.jpg` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/veg_corn.jpg` | `layout/html-boxes/home-landing/content.html` | 2026-09-24 | 黃金玉米（商品主圖） |
| `assets/images/veg_corn_peek.jpg` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/veg_corn_peek.jpg` | | 2026-09-24 | 黃金玉米圖集：苞葉裡探出頭 |
| `assets/images/veg_corn_close.jpg` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/veg_corn_close.jpg` | | 2026-09-24 | 黃金玉米圖集：臉部特寫 |
| `assets/images/veg_eggplant.jpg` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/veg_eggplant.jpg` | `layout/html-boxes/home-landing/content.html` | 2026-09-24 | 紫茄子 |
| `assets/images/veg_pumpkin.jpg` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/veg_pumpkin.jpg` | `layout/html-boxes/home-landing/content.html` | 2026-09-24 | 奶油南瓜 |
| `assets/images/veg_pepper.jpg` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/veg_pepper.jpg` | `layout/html-boxes/home-landing/content.html` | 2026-09-24 | 青椒 |
| `assets/images/veg_broccoli.jpg` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/veg_broccoli.jpg` | `layout/html-boxes/home-landing/content.html` | 2026-09-24 | 青花椰 |
| `assets/images/veg_cucumber.jpg` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/veg_cucumber.jpg` | `layout/html-boxes/home-landing/content.html` | 2026-09-24 | 小黃瓜 |
| `assets/images/logo_field.png` | `https://image-cdn-flare.qdm.cloud/q6f01a07a7c0c5/image/data/logo_field.png` | 版面 > LOGO（桌面與手機） | 2026-09-24 | 2026-09-24 已設為頁首並置中 |
| `assets/images/mug_blank.png` | `https://image-cdn.qdm.cloud/site/q6f01a07a7c0c5/image/data/mug_blank.jpg` | `pages/custom-preview/content.html` | 2026-09-25 | 白瓷馬克杯底圖。本機檔內容是 JPEG，圖庫檔名為 mug_blank.jpg |
| `assets/images/logo_sample.png` | `https://image-cdn.qdm.cloud/site/q6f01a07a7c0c5/image/data/logo_sample.png` | `pages/custom-preview/content.html` | 2026-09-25 | 透明底測試 logo |

上傳後把 `_尚無_` 那列換成實際資料，一張圖一列。
