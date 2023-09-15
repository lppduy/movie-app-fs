// Import Express
const express = require('express');
// Tạo một ứng dụng Express
const app = express();
// Đặt cổng cho Server
const port = 5000;

// Import Route từ tệp movie.js
const movieRoutes = require('./routes/movie.js');

// Sử dụng Route để lấy danh sách các phim đang Trending
app.use('/api/movies', movieRoutes);

// Xử lý các yêu cầu tại đây...

// Lắng nghe Server trên cổng đã đặt
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
