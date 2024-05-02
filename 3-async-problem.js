function A() {
  console.log('เตรียมวัตถุดิบทำกับข้าว');
}

function B() {
  console.log('ปรุงอาหาร');
}

function C() {
  console.log('เสริฟ');
}

// A();
// B();
// C();

// จุดตายของ Async : ลำดับการทำงานยาก
// ไม่รู้ว่า A,B,C จะทำงานเสร็จเมื่อไหร่ => การลำดับให้ A->B->C ทำงานต่อเนื่องกันจึงยาก
// A_Async();
// B_Async();
// C_Async();

function A_Async() {
  setTimeout(() => {
    console.log('เตรียมวัตถุดิบทำกับข้าว');
  }, 5000);
}

function B_Async() {
  setTimeout(() => {
    console.log('ปรุงอาหาร');
  }, 1000);
}

function C_Async() {
  setTimeout(() => {
    console.log('เสริฟ');
  }, 500);
}

A_Async();
B_Async();
C_Async();
