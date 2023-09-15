const fs = require('fs');

// Đường dẫn tới tệp JSON
const DATA_PATH = './data/mediaTypeList.json';

const MediaTypes = {
  all: function () {
    // Đọc dữ liệu từ tệp JSON và chuyển đổi nó thành một mảng JavaScript
    const data = fs.readFileSync(DATA_PATH, 'utf8');
    return JSON.parse(data);
  },
  // Các hàm khác để thao tác với dữ liệu trong tệp JSON (nếu cần)
};

module.exports = MediaTypes;
