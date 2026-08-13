# 團隊競賽管理平台｜通用空白版

這份版本由 AMR 平台架構整理而成，目的為提供其他單位複製使用。

## 這份範本已做的處理

- 不包含任何預設姓名。
- 不包含任何預設隊伍。
- 不連接原 AMR Firebase 專案，因此不會讀到原系統的姓名、隊伍、積分或其他雲端資料。
- 關閉「自動匯入舊隊伍／人員」。如有舊資料需要匯入，請由管理中心手動執行。
- 首頁名稱改為「團隊競賽管理平台」，可由管理中心自行修改。
- 人力資訊六宮格改為通用範例名稱，之後可全部自行修改。
- 已掛載 manifest.json，可作為手機主畫面／PWA 的基礎。

## 第一次使用

1. 到 Firebase Console 建立一個新的 Firebase 專案。
2. 啟用 Firestore Database。
3. 啟用 Authentication 的 Anonymous 匿名登入。
4. 如要上傳圖片或 PDF，啟用 Firebase Storage。
5. 建立 Web App，取得 Firebase `firebaseConfig`。
6. 打開根目錄 `firebase-config.js`，把設定貼入。
7. 將整個資料夾上傳到新的 GitHub Repository。
8. GitHub → Settings → Pages → Deploy from branch → main / root。

## 建議網址形式

例如建立新的 Repository：

`team-platform-template`

GitHub Pages 網址會類似：

`https://你的GitHub帳號.github.io/team-platform-template/`

## 資料建立方式

第一次連線到新的 Firebase 後，姓名與隊伍會維持空白。可進入「管理中心」自行建立。

目前原程式內建的「資料匯入」是針對舊版 Firebase `platform/settings/amrData/teams` 資料結構，不是 Excel / CSV 通用匯入。若要讓其他單位直接上傳 Excel / CSV 匯入姓名與隊伍，可再開發一個獨立的「名單匯入」功能。

## Excel 匯入人員與隊伍
1. 進入「管理中心」→「資料匯入」。
2. 可先按「下載 Excel 空白範本」。
3. Excel 欄位：`姓名`（必填）、`隊伍`（建議）、`職級`（選填）、`電話`（選填）。
4. 選擇 `.xlsx`、`.xls` 或 `.csv` 後，系統會先顯示預覽。
5. 按「確認匯入」後，平台會自動建立 Excel 中尚不存在的隊伍，再建立人員。
6. 同一隊伍內同名人員會略過，不覆蓋既有資料。
