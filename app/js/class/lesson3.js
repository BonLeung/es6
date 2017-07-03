{
  let regexp = new RegExp('xyz', 'i');
  let regexp2 = new RegExp(/xyz/i);
  console.log(regexp.test('xyz123'), regexp2.test('xyz123')); // true true

  let regexp3 = new RegExp(/xyz/ig, 'i');
  // flags 用来获取正则表达式的修饰符
  console.log(regexp3.flags); // i
}

{
  let s = 'bbb_bb_b';
  let regexp = /b+/g;
  let regexp2 = /b+/y;

  console.log('one', regexp.exec(s), regexp2.exec(s));
  // one ["bbb", index: 0, input: "bbb_bb_b"] ["bbb", index: 0, input: "bbb_bb_b"]
  console.log('two', regexp.exec(s), regexp2.exec(s));
  // two ["bb", index: 4, input: "bbb_bb_b"] null

  console.log(regexp.sticky, regexp2.sticky); // false true
}

{
  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A')); // u-1 true
  console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));  // u-2 false

  console.log(/\u{61}/.test('a'));  // false
  console.log(/\u{61}/u.test('a')); // true

  console.log(`\u{20BB7}`); // 𠮷
  let s = '𠮷';
  console.log('u-1', /^.$/.test(s));  // u-1 false
  console.log('u-2', /^.$/u.test(s));  // u-2 true

  console.log('test-1', /𠮷{2}/.test('𠮷𠮷'));  // test-1 false
  console.log('test-2', /𠮷{2}/u.test('𠮷𠮷'));  // test-2 true
}
