# **WAVES 民宿預訂系統**

WAVES 是一個基於 Vue.js 和 Vite 構建的現代化民宿預訂網站，提供房間瀏覽、預訂、最新消息、部落格分享和用戶管理等功能，為用戶帶來便捷的預訂體驗。

---

## **功能特點**
- **動態首頁**：包含房間輪播圖及最新部落格文章。
- **房間瀏覽**：可瀏覽多種房型，並進行篩選。
- **即時消息更新**：提供分類、搜索和排序功能，快速定位內容。
- **用戶系統**：
  - **登入**：使用假登入驗證模擬用戶體驗。
  - **預訂檢查**：登入後可查看預訂和提交訂單。
  - **登出**：安全退出功能，保護用戶信息。
- **響應式設計**：適配桌面與移動設備，提升使用體驗。

---

## **技術棧**
- **前端**：Vue 3、Vite
- **狀態管理**：Vuex
- **樣式**：SCSS
- **API 請求**：Axios
- **部署**：Netlify

---

## **安裝與使用指南**

### **1. 環境需求**
- Node.js（版本 ≥ 16.0.0）

### **2. 克隆專案**
```bash
git clone https://github.com/vivi0814/waves.git
cd waves
```

### **3. 安裝依賴**
```bash
npm install
```

### **4. 啟動開發伺服器**
```bash
npm run dev
```

### **5. 建立生產環境（可選）**
```bash
npm run build
```

### **6. 部署專案（Netlify 範例）**
1. 前往 [Netlify 官網](https://www.netlify.com/) 並登錄。
2. 新建網站，選擇 Git 儲存庫作為來源。
3. 在部署設置中：
   - **Build Command**：`npm run build`
   - **Publish Directory**：`dist`
4. 點擊部署按鈕，完成上線。

---

## **文件結構**
```plaintext
waves/
├── public/                # 靜態資源
├── src/
│   ├── assets/            # 圖片、影片、SCSS 文件等資源
│   ├── components/        # Vue 組件
│   ├── router/            # 路由配置
│   ├── store/             # Vuex 狀態管理
│   ├── views/             # 頁面組件
│   ├── App.vue            # 主應用組件
│   ├── main.js            # 應用入口
├── package.json           # 項目依賴與腳本
├── vite.config.js         # Vite 配置
└── README.md              # 專案說明
```


