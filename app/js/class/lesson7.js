{
  function test(x, y = "world") {
    console.log('默认值', x, y);
  }
  test('hello');  // 默认值 hello world
  test('hello', 'bangge');  // 默认值 hello bangge
}

{
  let x = 'test';
  function test2(x, y = x) {
    console.log('作用域', x, y);
  }
  test2('kill');  // 作用域 kill kill
  test2();        // 作用域 undefied undefined
}

{
  function test3(...arg) {
    for (let v of arg) {
      console.log('rest', v);
    }
  }
  test3(1, 2, 3);
  // rest 1
  // rest 2
  // rest 3
}

{
  console.log(...[1, 2, 3]);  // 1 2 3
  console.log('a', ...[1, 2, 3]); // a 1 2 3
}

{
  let arraw = v => v * 2;
  console.log('arrow', arraw(2));  // arrow 4

  let arrow2 = () => 5;
  console.log('arrow2', arrow2());  // arrow2 5
}

{
  function tail(x) {
    console.log('tail', x);
  }
  function fx(x) {
    return tail(x);
  }
  fx(123);  // tail 123
}
