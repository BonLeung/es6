{
  let obj = {
    time: '2017-07-05',
    name: 'net',
    _r: 123
  };

  let monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get(target, key) {
      
    }
  });
  monitor
}
