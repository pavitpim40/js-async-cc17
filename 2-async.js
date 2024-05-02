// BuildIn JS (Async)
// - setTimeOut  FN
// - setInterval FN

// สอนคอม
const asyncFn = () => console.log('Async Task');
const delayTimeInMS = 0;

const syncFn = () => console.log('Sync Task');

// Execute

for (let i = 0; i < 2; i++) {
  setTimeout(asyncFn, 0);
  syncFn();
}
