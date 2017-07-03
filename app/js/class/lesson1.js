function test() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  /*
  console.log(i); // i is not defined
  */
}

test();

function last() {
  const PI = 3.1415926;
  const obj = {
    a: 1
  };
  obj.b = 2;
  console.log(PI, obj);
}

last();
