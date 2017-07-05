{
  let obj = {
    time: '2017-07-05',
    name: 'net',
    _r: 123
  };

  let monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get(target, key) {
      return target[key].replace('2017', '2018')
    },
    // 拦截对象设置属性
    set(target, key, value) {
      if (key === 'name') {
        return target[key] = value;
      } else {
        return target;
      }
    },
    // 拦截 key in object 操作
    has(target, key) {
      if (key === 'name') {
        return target[key];
      } else {
        return false;
      }
    },
    // 拦截 delete
    deleteProperty(target, key) {
      if (key.indexOf('_') > -1) {
        delete target[key];
        return true;
      } else {
        return target[key];
      }
    },
    // 拦截 Object.keys, Object.getOwnPropertySymbols, Object.getOwnPropertyNames
    ownKeys(target) {
      return Object.keys(target).filter(item => item != 'time');
    }
  });

  console.log('get', monitor.time); // get 2018-07-05

  monitor.time = '2019';
  console.log('set', monitor.time); // set 2018-07-05
  monitor.name = 'mukewang';
  console.log('set', monitor.name); // set mukewang

  console.log('has', 'name' in monitor, 'time' in monitor); // has true false

  // delete monitor.time;
  // console.log('delete', monitor); // delete Proxy {time: "2017-07-05", name: "mukewang", _r: 123}
  //
  // delete monitor._r;
  // console.log('delete', monitor); // delete Proxy {time: "2017-07-05", name: "mukewang"}

  console.log('ownKeys', Object.keys(monitor)); // ownKeys (2) ["name", "_r"]
}


{
  let obj = {
    time: '2017-07-05',
    name: 'net',
    _r: 123
  };

  console.log('Reflect', Reflect.get(obj, 'time')); // Reflect 2017-07-05
  Reflect.set(obj, 'name', 'mukewang');
  console.log(obj); // Object {time: "2017-07-05", name: "mukewang", _r: 123}
  console.log('has', Reflect.has(obj, 'name')); // has true
}

{
  function validator(target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)) {
          let va = this._validator[key];
          if (!!va(value)) {
            return Reflect.set(target, key, value, proxy);
          } else {
            throw Error(`不能设置${key}到${value}`);
          }
        } else {
          throw Error(`${key} 不存在`);
        }
      }
    })
  }

  const personValidators = {
    name(val) {
      return typeof val === 'string';
    },
    age(val) {
      return typeof val === 'number' && val > 18;
    }
  }

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      return validator(this, personValidators);
    }
  }

  const person = new Person('zhangsan', 30);
  console.log(person);  // {name: "zhangsan", age: 30}
  person.name = 'lisi';
  console.log(person);  // {name: 'lisi', age: 30}
}
