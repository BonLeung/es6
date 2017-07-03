{
  // 二进制数
  console.log(0b111110111); // 503
  // 八进制数
  console.log(0o767);       // 503
}

{
  console.log('15', Number.isFinite(15));   // 15 true
  console.log('NaN', Number.isFinite(NaN)); // NaN false
  console.log('1/0', Number.isFinite(1/0)); // 1/0 false

  console.log('NaN', Number.isNaN(NaN));    // NaN true
  console.log('0', Number.isNaN(0));        // 0 false
}

{
  console.log('25', Number.isInteger(25));  // 25 true
  console.log('25.0', Number.isInteger(25.0));  // 25.0 true
  console.log('25.1', Number.isInteger(25.1));  // 25.1 false
  console.log(Number.isInteger('25'));  // false
}

{
  console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
  console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
  console.log('10', Number.isSafeInteger(10));  // 10 true
  console.log('a', Number.isSafeInteger('a'));  // a false
}

{
  console.log('4.1', Math.trunc(4.1));  // 4.1 4
  console.log('4.9', Math.trunc(4.9));  // 4.9 4
}

{
  console.log('-5', Math.sign(-5));     // -5 -1
  console.log('0', Math.sign(0));       // 0 0 
  console.log('5', Math.sign(5));       // 5 1
  console.log('50', Math.sign('50'));   // 50 1
  console.log('foo', Math.sign('foo')); // foo NaN
}

{
  console.log('-1', Math.cbrt(-1));
  console.log('8', Math.cbrt(8));
}
