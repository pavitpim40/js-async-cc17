/*
File Operation(Read Write) : Async 
- ค้นหาไฟล์
- เปิดไฟล์ 
- อ่านไฟล์(ไฟล์ยาวมากๆ ใช้เวลาอ่านมากขึ้น)
- เขียนไฟล์ ?
*/

// import built-in node
const fs = require('fs'); // file-system

// fs.readFile('./data/text1.txt', 'utf-8', (err, data) => {
//   if (!err) console.log('data', data);
// });

// SECRET_MESSAGE : File1=>File2=>File3=>File4=>SecretMessage

let finalResult = '';
// Callback Hell
fs.readFile('./data/text1.txt', 'utf-8', (err1, data1) => {
  if (!err1) {
    // data ของไฟล์ที่ 1 === ชื่อของ ไฟล์ที่ 2
    fs.readFile(`./data/${data1}`, 'utf-8', (err2, data2) => {
      if (!err2) {
        // data ของไฟล์ที่ 2 === ชื่อของ ไฟล์ที่ 3
        fs.readFile(`./data/${data2}`, 'utf-8', (err3, data3) => {
          if (!err3) {
            // data ของไฟล์ที่ 3 === ชื่อของ ไฟล์ที่ 4
            fs.readFile(`./data/${data3}`, 'utf-8', (err4, data4) => {
              // data ของไฟล์ที่ 4 ===  SECRET MESSAGE
              if (!err4) {
                console.log('SECRET MESSAGE :', data4);
                finalResult = data4;
              }
            });
          }
        });
      }
    });
  }
});
// console.log(finalResult); // not work (Early Execute)
