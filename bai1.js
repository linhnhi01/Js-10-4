var fs = require('fs');

// dung thu vien readFileSync ( doc tep )
try {
      const data = fs.readFileSync('text.txt', 'utf8');
      console.log('Đọc file: ', data);
  } catch (err) {
      console.error('Lỗi khi đọc tệp tin:', err);
}

// dung thu vien writeFileSync ( viet tep )
try {
     const content = 'today, I feel happy so much!';
     fs.writeFileSync('text.txt', content, 'utf8');
     console.log('Đã ghi nội dung vào tệp tin thành công.');
 } catch (err) {
     console.error('Lỗi khi ghi tệp tin:', err);
}