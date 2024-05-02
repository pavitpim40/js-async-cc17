// ทำมาแก้ปัญหาข้อ 5

const fs = require('fs');

// # Version 1
const promise = new Promise((fulfill, reject) => {
  // Promise จะมีสถานะเป็น PENDING จนกว่า fulfill,reject จะถูกเรียก

  // ReadFile : Async Operation
  fs.readFile('./data/text1.txt', 'utf-8', (err, data) => {
    if (!err) fulfill(data); // RESOLVED
    else reject(err); // RESOLVED
  });
});

// promise.then((result) => console.log(result)).catch((err) => console.log('ERR', err));

// # Version 2  : สร้างฟังก์ชันที่ return Promise (ประหยัดเวลาในการเขียน)
function readFilePromise(path) {
  let promise = new Promise((fulfill, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (!err) fulfill(data);
      else reject(err);
    });
  });
  return promise;
}

const promise1 = readFilePromise('./data/text1.txt');
const promise2 = readFilePromise('./data/text2.txt');
const promise3 = readFilePromise('./data/text3.txt');
const promise4 = readFilePromise('./data/text4.txt');

// อ่านแยกไฟล์ ถ้า Rejected 1 ตัว / ตัวอื่นก็ทำงานได้ปกติ
// promise1.then((result) => console.log(result)).catch((err) => console.log('ERR', err));
// promise2.then((result) => console.log(result)).catch((err) => console.log('ERR', err));
// promise3.then((result) => console.log(result)).catch((err) => console.log('ERR', err));
// promise4.then((result) => console.log(result)).catch((err) => console.log('ERR', err));
