// Trong tệp routes/movie.js
const express = require('express');
const router = express.Router();

// Import dữ liệu từ file JSON
const movieList = require('../data/movieList.json');

// Định tuyến GET cho danh sách phim đang Trending
router.get('/trending', (req, res) => {
  // Trang hiện tại (mặc định là 1 nếu không có tham số page)
  const currentPage = parseInt(req.query.page) || 1;

  // Số lượng phần tử trên mỗi trang
  const itemsPerPage = 20;

  // Tổng số trang (số lượng phim chia số lượng trang)
  const totalPages = Math.ceil(movieList.length / itemsPerPage);

  // Tính index bắt đầu và kết thúc của danh sách phim trên trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, movieList.length);

  // Lấy danh sách phim trên trang hiện tại
  const trendingMovies = movieList.slice(startIndex, endIndex);

  // Trả về kết quả
  res.status(200).json({
    results: trendingMovies,
    page: currentPage,
    total_pages: totalPages,
  });
});

// Định tuyến GET cho danh sách phim có Rating cao
router.get('/top-rate', (req, res) => {
  // Trang hiện tại (mặc định là 1 nếu không có tham số page)
  const currentPage = parseInt(req.query.page) || 1;

  // Số lượng phần tử trên mỗi trang
  const itemsPerPage = 20;

  // Sắp xếp danh sách phim theo vote_average giảm dần
  const sortedMovies = movieList.sort((a, b) => b.vote_average - a.vote_average);

  // Tổng số trang (số lượng phim chia số lượng trang)
  const totalPages = Math.ceil(sortedMovies.length / itemsPerPage);

  // Tính index bắt đầu và kết thúc của danh sách phim trên trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, sortedMovies.length);

  // Lấy danh sách phim có Rating cao trên trang hiện tại
  const topRatedMovies = sortedMovies.slice(startIndex, endIndex);

  // Trả về danh sách phim có Rating cao, trang hiện tại và tổng số trang
  res.status(200).json({
    results: topRatedMovies,
    page: currentPage,
    total_pages: totalPages,
  });
});

module.exports = router;
