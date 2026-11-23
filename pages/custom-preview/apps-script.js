// 貼進 script.google.com。用 tsaijbj4@gmail.com 部署成網頁應用程式。
// SECRET 要和頁面的 GAS_SECRET 相同。改了這裡之後要重新部署新版本。
// 收件人寫死，不從網頁傳入。
// SECRET 實際值在本機 account/env，貼進 Apps Script 時再填；repo 裡保持空字串（空的會一律拒收）。

var RECIPIENT = "tsaijbj4@gmail.com";
var SECRET = "";
var MAX_FILE_BYTES = 2.5 * 1024 * 1024;
var MIME_OK = /^image\/(png|jpeg|webp)$/;

function doPost(e) {
  try {
    var raw = e && e.postData && e.postData.contents;
    if (!raw) return json_({ ok: false, error: "沒有內容" });

    var data;
    try {
      data = JSON.parse(raw);
    } catch (err) {
      return json_({ ok: false, error: "內容不是 JSON" });
    }

    if (missing_(data)) return json_({ ok: false, error: "欄位缺" });
    if (!SECRET || data.secret !== SECRET) return json_({ ok: false, error: "密鑰不符" });
    if (!MIME_OK.test(data.logo_mime) || !MIME_OK.test(data.preview_mime)) {
      return json_({ ok: false, error: "mime 不是 image/png、jpeg 或 webp" });
    }

    var logoBytes = Utilities.base64Decode(data.logo_base64);
    var previewBytes = Utilities.base64Decode(data.preview_base64);
    if (logoBytes.length > MAX_FILE_BYTES || previewBytes.length > MAX_FILE_BYTES) {
      return json_({ ok: false, error: "單檔超過約 2.5MB" });
    }

    var ref = String(data.ref_code);
    var logoName = ref + "-" + safeName_(data.file_name);
    var previewName = ref + "-preview.png";
    var subject = "客製 " + ref + " 白瓷馬克杯";
    var body = [
      "編號：" + ref,
      "品項：" + data.product_name,
      "位置：" + data.position,
      "檔名：" + data.file_name
    ].join("\n");

    GmailApp.sendEmail(RECIPIENT, subject, body, {
      attachments: [
        Utilities.newBlob(logoBytes, data.logo_mime, logoName),
        Utilities.newBlob(previewBytes, data.preview_mime, previewName)
      ]
    });
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: err && err.message ? err.message : "寄信失敗" });
  }
}

function missing_(data) {
  if (!data || typeof data !== "object") return true;
  var keys = [
    "secret",
    "ref_code",
    "position",
    "file_name",
    "product_name",
    "logo_base64",
    "logo_mime",
    "preview_base64",
    "preview_mime"
  ];
  for (var i = 0; i < keys.length; i++) {
    if (data[keys[i]] === undefined || data[keys[i]] === null || String(data[keys[i]]) === "") return true;
  }
  return false;
}

function safeName_(name) {
  var base = String(name || "logo").replace(/[\\\/:*?"<>|]/g, "_");
  return base || "logo";
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.TEXT);
}
