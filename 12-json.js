// JS-OBJECT
const student = {
  name: 'John',
  age: 27,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null,
  doHw: () => console.log('Do my Hw'),
  certificate: undefined,
};

// ส่งข้อมูลผ่าน HTTP : แปลง JS Object เป็น JSON
const jsonData = JSON.stringify(student);
console.log(jsonData, typeof jsonData);

// รับข้อมูลจาก HTTP Request : แปลง JSON กลับมาเป็น JS-Object เพื่อใช้ทำงานใน App
const jsObject = JSON.parse(jsonData);
console.log(jsObject, typeof jsObject);
