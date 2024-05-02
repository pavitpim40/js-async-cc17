// จุดตายของ Async : ลำดับการทำงานยาก
// ไม่รู้ว่า A,B,C จะทำงานเสร็จเมื่อไหร่ => การลำดับให้ A->B->C ทำงานต่อเนื่องกันจึงยาก

// How to Solved : Callback
function A_Async(cb1, cb2) {
  setTimeout(() => {
    console.log('เตรียมวัตถุดิบทำกับข้าว');
    cb1(cb2); // B_Async(C_Async)
  }, 5000);
}

function B_Async(cb) {
  setTimeout(() => {
    console.log('ปรุงอาหาร');
    cb();
  }, 1000);
}

function C_Async() {
  setTimeout(() => {
    console.log('เสริฟ');
  }, 500);
}
// ## A ทำก่อน B ทำทีหลัง
// A_Async(B_Async);

// ## B ทำก่อน C ทำทีหลัง
// B_Async(C_Async);

// ## A->B->C
A_Async(B_Async, C_Async);
