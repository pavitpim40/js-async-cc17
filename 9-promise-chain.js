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

// # Version 3 : File1 => File2 => File3 => File4

const pm = new Promise((fulfill, reject) => {
  fulfill(100);
});

// สิ่งที่ return ใน then จะไปเป็น Promise Fulfill ของ then ถัดไป
pm.then((r) => r + 10) // fulfill(r+10) ==> s
  .then((s) => s + 1000) // fulfill(s+1000) ==> t
  .then((t) => console.log(t));

// pm.then((r) => r + 10)  == (new Promise()).then(s=>s+100)

const mainPromise = readFilePromise('./data/text1.txt');

mainPromise
  .then((result) => readFilePromise(`./data/${result}`))
  .then((result) => readFilePromise(`./data/${result}`))
  .then((result) => readFilePromise(`./data/${result}`))
  .then((message) => console.log(message))
  .catch((err) => console.log(err)); // 1ST ERROR CATCH
