{
  // 简洁表示法
  let o = 1;
  let k = 2;
  let es5 = {
    o: o,
    k: k
  };
  let es6 = {
    o,
    k
  };
  console.log(es5); // Object {o: 1, k: 2}
  console.log(es6); // Object {o: 1, k: 2}

  let es5_method = {
    hello: function() {
      console.log('hello');
    }
  };
  let es6_method = {
    hello() {
      console.log('hello');
    }
  };
  es5_method.hello(); // hello
  es6_method.hello(); // hello
}

{
  // 属性表达式
  let  a = 'b';
  let es5_obj = {
    a: 'c'
  };

  let es6_obj = {
    [a]: 'c'
  };

  console.log(es5_obj); // Object {a: "c"}
  console.log(es6_obj); // Object {b: "c"}
}

{
  // 新增API
  console.log('字符串', Object.is('abc', 'abc'));  // 字符串 true
  console.log('数组', Object.is([1, 2, 3], [1, 2, 3])); // 数组 false

  console.log('拷贝', Object.assign({a: 'a'}, {b: 'b'})); // 拷贝 Object {a: "a", b: "b"}

  let test = {a: 123, b: 456};
  for (let [key, value] of Object.entries(test)) {
    console.log(key, value);
    // a: 123
    // b: 456
  }
}

{
  // 扩展运算符
  let {a, b, ...c} = {a: 'test', b: 'kill', c: 'ccc', d: 'ddd'};
  console.log(c); // c = {c: 'ccc', d: 'ddd'};
}
