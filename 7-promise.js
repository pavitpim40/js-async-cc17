// วิธี Handle Async
// - CallBack -> CallBack Hell
// - Promise (BuildIn Object ใน JS)

// ร่างสัญญา รับ Callback 2 ตัว
// cb1 เป็น ฟังก์ที่จะถูกเรียกใช้งานเมื่อทำตามสัญญาได้
// cb2 เป็น ฟังก์ที่จะถูกเรียกใช้งานเมื่อทำตามสัญญาไม่ได้

function contract(cb1, cb2) {
  setTimeout(() => {
    // LOGIC : Async Operation
    let n = Math.floor(Math.random() * 11);

    // Finalize : ทำตามสัญญาได้ไหม
    if (n % 2 == 0) cb1(n); // Success
    else cb2(new Error(`${n} is not Even Number`)); // Failed
  }, 1000);
}

const promise = new Promise(contract);

console.log(promise); // PENDING

// Handle : RESOLVED
// promise.then(cb).catch(cb);
// สิ่งที่โยนให้ cb1 จะมาเป็นฟังก์ชัน parameter ของ cb ใน then
// สิ่งที่โยนให้ cb2 จะมาเป็นฟังก์ชัน parameter ของ cb ใน catch
promise
  .then((result) => {
    console.log('Fulfilled', result);
  })
  .catch((err) => {
    console.log('Rejected', err);
  });
