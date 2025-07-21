const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// 允许跨域
app.use(cors());

// 添加 /api 路由
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server' });
});

// 启动服务
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});