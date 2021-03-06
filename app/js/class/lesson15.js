{
  // generator 基本定义
  let tell = function* () {
    yield 'a';
    yield 'b';
    return 'c';
  };

  let k = tell();
  console.log(k.next());  // Object {value: "a", done: false}
  console.log(k.next());  // Object {value: "b", done: false}
  console.log(k.next());  // Object {value: "c", done: true}
  console.log(k.next());  // Object {value: undefined, done: true}
}

{
  let obj = {};
  obj[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
  };

  for (let value of obj) {
    console.log('value', value);
    // value 1
    // value 2
    // value 3
  }
}

{
  let state = function*() {
    while(1) {
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status = state();
  console.log(status.next()); // Object {value: "A", done: false}
  console.log(status.next()); // Object {value: "B", done: false}
  console.log(status.next()); // Object {value: "C", done: false}
  console.log(status.next()); // Object {value: "A", done: false}
  console.log(status.next()); // Object {value: "B", done: false}
}

{
  let draw = function(count) {
    // 具体抽奖逻辑
    console.log(`剩余${count}次`);
  }

  let residuce = function*(count) {
    while(count > 0) {
      count--;
      yield draw(count);
    }
  }

  let start = residuce(5);
  let btn = document.createElement('button');
  btn.id = "start";
  btn.textContent = "抽奖";
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click', function() {
    start.next();
  }, false)
}

{
  // 长轮询
  let ajax = function*() {
    yield new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve({code: 0});
      }, 200);
    })
  }

  let pull = function() {
    let generator = ajax();
    let step = generator.next();
    step.value.then(function(d) {
      if (d.code == 0) {
        setTimeout(function () {
          console.log('wait');
          pull();
        }, 1000);
      } else {
        console.log(d);
      }
    })
  }

  pull();
}
