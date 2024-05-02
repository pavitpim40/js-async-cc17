// Async Await (JS Keyword) => ทำมาเพื่อ handle Promise

// 1.async function คือ function ที่ return Promise
async function fetchAPI() {
  return 5; // Promise ที่ resolve แล้วได้ 5
}
// console.log(fetchAPI()); // Promise {5}
// fetchAPI().then((r) => console.log(r)); // 5

// 2. await keyword ใช้จัดการกับ Promise Object จนกว่าจะ Resolve

// FN ที่สร้าง Promise
const fs = require('fs');
function readFilePromise(path) {
  let promise = new Promise((fulfill, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (!err) fulfill(data);
      else reject(err);
    });
  });
  return promise;
}

async function readFile() {
  try {
    // Async Task (Callback, Promise.then, Await)
    // let result1 = await readFilePromise('./data/text1.txt');
    // let result2 = await readFilePromise(`./data/${result1}`);
    // let result3 = await readFilePromise(`./data/${result2}`);
    // let result4 = await readFilePromise(`./data/${result3}`);

    const promise1 = readFilePromise('./data/text1.txt');
    const promise2 = readFilePromise('./data/text2.txt');
    const promise3 = readFilePromise('./data/text3.txt');
    const promise4 = readFilePromise('./data/text4.txt');

    const [result1, result2, result3, result4] = await Promise.all([
      promise1,
      promise2,
      promise3,
      promise4,
    ]);

    console.log('result', result1, result2, result3, result4);
  } catch (error) {
    console.log(error);
  }
}

readFile();
console.log('Hi');
