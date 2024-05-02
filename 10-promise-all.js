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

const promise1 = readFilePromise('./data/text1.txt');
const promise2 = readFilePromise('./data/text2.txt');
const promise3 = readFilePromise('./data/text3.txt');
const promise4 = readFilePromise('./data/text4.txt');

const allPromise = Promise.all([promise1, promise2, promise3, promise4]);

// then จะทำงานเมื่อทุก Promise Resolve
allPromise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
