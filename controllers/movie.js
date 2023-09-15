const Movies = require('../models/Movies');

// Sử dụng hàm `all()` để lấy danh sách phim
const movieList = Movies.all();
console.log(movieList);

// Làm các thao tác khác với danh sách phim nếu cần
