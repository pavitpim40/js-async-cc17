// สอนคอมให้รู้จัก Function (Heap)
function A() {
  console.log('Perform Task A');
}

function B() {
  console.log('Perform Task B');
}

function C() {
  console.log('Perform Task C');
}
function D() {
  C();
  console.log('Perform Task D');
}

// Execute (Call Stack)
// A();
// B();

D();
