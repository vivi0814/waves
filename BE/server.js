// server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');

// 載入環境變量
dotenv.config();

const app = express();
const PORT = 3000;

// 中介軟體
app.use(cors({
    origin: 'http://localhost:5173', // 允許的來源
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // 允許的 HTTP 方法
    allowedHeaders: ['Content-Type'], // 允許的請求標頭
}));
app.use(express.json()); // 解析 JSON 請求主體

// 建立資料庫連接
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// 連接資料庫
db.connect((err) => {
    if (err) {
        console.error('資料庫連接失敗:', err);
        process.exit(1);
    }
    console.log('已連接資料庫');
});

// 訂閱路由
app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    // 簡單的電子郵件格式驗證
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format.' });
    }

    const query = 'INSERT INTO subscribers (email) VALUES (?)';
    db.query(query, [email], (err, result) => {
        if (err) {
            console.error('資料庫錯誤:', err);
            return res.status(500).json({ success: false, message: 'Database error.' });
        }

        res.status(200).json({ success: true, message: 'Subscription successful!' });
    });
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// 錯誤處理
process.on('unhandledRejection', (reason, promise) => {
    console.error('未處理的 Promise 拒絕:', reason);
});