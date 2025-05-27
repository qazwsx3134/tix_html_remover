# 使用瀏覽器開發者工具執行 JavaScript 代碼

本指南適用於不熟悉程式（開發）工具的使用者
---

## **步驟 1：打開瀏覽器的開發者工具**

1. **Google Chrome / Microsoft Edge / Brave 瀏覽器**
   - **Windows / Linux**：按下 `F12` 或 `Ctrl + Shift + I`
   - **Mac**：按下 `Cmd + Option + I`

2. **Mozilla Firefox**
   - **Windows / Linux**：按下 `F12` 或 `Ctrl + Shift + K`
   - **Mac**：按下 `Cmd + Option + K`

3. **Apple Safari**（需先啟用開發者模式）
   - 進入 `設定 > 進階`，勾選 **「在選單列顯示開發者選單」**
   - 之後可以按 `Cmd + Option + C` 來開啟 Console

---

## **步驟 2：切換到 Console（主控台）視窗**

開啟開發者工具後，請點擊上方的 `Console`（主控台）選項，或使用快捷鍵：
- **Windows / Linux**：按 `Ctrl + Shift + J`
- **Mac**：按 `Cmd + Option + J`

---

## **步驟 3：貼上 JavaScript 代碼並執行**

1. 點擊 Console（主控台）中的輸入欄位。
2. **複製以下代碼**，然後在 Console 中 **貼上**（`Ctrl + V` 或 `Cmd + V`）。
3. 按 `Enter` 執行。

```javascript
document.addEventListener("DOMContentLoaded", function () {
    // 從檔案裡面複製的code
});
```

---

## **可能的錯誤與解決方法**

### **1. 無法找到 Console（主控台）？**
請確保您已打開瀏覽器開發者工具，並選擇 `Console` 分頁。

### **2. 貼上代碼後沒有反應？**
- 請確保您已在 Console 中貼上完整code。
- 確認該網頁載入完成後再執行。

### **3. 執行code後沒有彈出確認框？**
- 可能網頁中的 `<ul class="area-list">` 不存在或未加載。
- 嘗試在 `document.addEventListener("DOMContentLoaded", ... )` 之外直接執行代碼。

---

## **結語**

如果成功執行，當頁面內的所有 `ul.area-list` **裡面全部的 `<li>` 都是灰色文字**，就會彈出確認對話框，詢問是否重新整理頁面。

這樣就能讓不懂開發的人，也能輕鬆在瀏覽器中執行這段 JavaScript 代碼！🎉

