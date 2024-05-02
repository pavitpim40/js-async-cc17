// CallBack Hell

// ให้ใช้ console.log ตัวอักษร A-Z โดยให้มีระยะห่างระหว่างตัวอักษร 1 วินาที
// เช่น console.log(‘A’) แล้วหลังจากนั้น 1 วินาที ให้ console.log(‘B’) ทำแบบนี้ต้อไปเรื่อยๆจนถึง Z

const alphabets = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// for (let c of alphabets) {
//   setTimeout(() => {
//     console.log(c);
//   }, 1000);
// }

setTimeout(() => {
  console.log('A');
  setTimeout(() => {
    console.log('B');
    setTimeout(() => {
      console.log('C');
      setTimeout(() => {
        console.log('D');
        setTimeout(() => {
          console.log('E');
          setTimeout(() => {
            console.log('F');
            setTimeout(() => {
              console.log('G');
              setTimeout(() => {
                console.log('H');
                setTimeout(() => {
                  console.log('I');
                  setTimeout(() => {
                    console.log('J');
                    setTimeout(() => {
                      console.log('K');
                      setTimeout(() => {
                        console.log('L');
                        setTimeout(() => {
                          console.log('M');
                          setTimeout(() => {
                            console.log('N');
                            setTimeout(() => {
                              console.log('O');
                              setTimeout(() => {
                                console.log('P');
                                setTimeout(() => {
                                  console.log('Q');
                                  setTimeout(() => {
                                    console.log('R');
                                    setTimeout(() => {
                                      console.log('S');
                                      setTimeout(() => {
                                        console.log('T');
                                        setTimeout(() => {
                                          console.log('U');
                                          setTimeout(() => {
                                            console.log('V');
                                            setTimeout(() => {
                                              console.log('W');
                                              setTimeout(() => {
                                                console.log('X');
                                                setTimeout(() => {
                                                  console.log('Y');
                                                  setTimeout(() => {
                                                    console.log('Z');
                                                  }, 1000);
                                                }, 1000);
                                              }, 1000);
                                            }, 1000);
                                          }, 1000);
                                        }, 1000);
                                      }, 1000);
                                    }, 1000);
                                  }, 1000);
                                }, 1000);
                              }, 1000);
                            }, 1000);
                          }, 1000);
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
