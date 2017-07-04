{
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log('size', list.size); // size 2
}

{
  let arr = [1, 2, 3, 4, 5];
  let list = new Set(arr);

  console.log(list);  // Set {1, 2, 3, 4, 5}
  console.log('size', list.size); // size 5
}

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);
  console.log('list', list);  // list Set {1, 2}
}

{
  // 去重
  let arr = [1, 2, 3, 4, 5, 3, 2, 1];
  let list = new Set(arr);
  console.log('list', list);  // list Set {1, 2, 3, 4, 5}
}

{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);
  console.log('has', list.has('has'));  // has true
  console.log('delete', list.delete('add'), list);  // delete true Set {'delete', 'clear', 'has'}
  list.clear();
  console.log('clear', list); // clear Set {}
}

{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);
  for (let key of list.keys()) {
    console.log('key', key);
    // key add
    // key delete
    // key clear
    // key has
  }
  for (let value of list.values()) {
    console.log('value', value);
    // value add
    // value delete
    // value clear
    // value has
  }
  for (let [key, value] of list.entries()) {
    console.log(key, value);
    // add add
    // delete delete
    // clear clear
    // has has
  }
  list.forEach(function(item) {console.log(item);});
  // add
  // delete
  // clear
  // has
}

{
  let weakList = new WeakSet();

  let arg = {};

  weakList.add(arg);

  console.log('weakList', weakList);  // weakList WeakSet{Object{}}
}

{
  let map = new Map();
  let arr = ['123'];

  map.set(arr, 456);
  console.log(map); // Map {["123"] => 456}
  console.log(map.get(arr));  // 456
}

{
  let map = new Map([['a', 123], ['b', 456]]);
  console.log(map); // Map {"a" => 123, "b" => 456}
  console.log('size', map.size);  // size 2

  console.log('delete', map.delete('a'), map);  // delete true Map {"b" => 456}
  console.log('clear', map.clear(), map); // clear undefined Map {}
}

{
  let weakMap = new WeakMap();

  let obj = {};
  weakMap.set(obj, 123);
  console.log(weakMap.get(obj));  // 123
}

{
  // 数据结构横向对比，增、删、改、查
  let map = new Map;
  let array = [];

  // 增
  map.set('a', 1);
  array.push({a: 1});

  console.info('map', map); // map Map {"a" => 1}
  console.info('array', array); // array [{"a": 1}}]

  // 删
  map.delete('a');
  let index = array.findIndex(item => item.a);
  array.splice(index, 1);
  console.log('map', map);  // map Map {}
  console.log('array', array);  // array []

  // 改
  map.set('a', 2);
  array.forEach(item => item.a ? item.a = 2 : '');
  console.log('map', map);  // map Map {"a": 2}
  console.log('array', array);  // array Array [{"a": 2}]

  // 查
  let map_exist = map.has('a');
  let array_exist = array.find(item => item.a);
  console.info('map_exist', map_exist); // map_exist true
  console.info('array_exist', array_exist); // array_exist Object {a: 1}
}

{
  // Set 和 Array 的对比
  let set = new Set();
  let array = [];

  // 增
  set.add({a: 1});
  array.push({a: 1})
  console.log('set', set);  // set Set {Object {a: 1}}
  console.log('array', array);  // array [{a: 1}]

  // 查
  let set_exist = set.has({a: 1});
  let array_exist = array.find(item => item.a);
  console.log('set_exist', set_exist);  // set_exist false
  console.log('array_exist', array_exist);  // array_exist Object {a: 1}

  // 改
  set.forEach(item => item.a ? item.a = 2 : '');
  array.forEach(item => item.a ? item.a = 2 : '');
  console.log('set', set);  // set Set {Object {a: 2}}
  console.log('array', array);  // array [{a: 2}]

  // 删
  set.forEach(item => item.a ? set.delete(item) : '');
  let index = array.findIndex(item => item.a);
  array.splice(index, 1);
  console.log('set', set);  // set Set {}
  console.log('array', array);  // array []
}

{
  // map，set，object 对比
  let item = {a: 1};
  let map = new Map();
  let set = new Set();
  let obj = {};

  // 增
  map.set('a', 1);
  set.add(item);
  obj['a'] = 1;
  console.log('map', map);  // map Map {"a" => 1}
  console.log('set', set);  // set Set {Object {a: 1}}
  console.log('obj', obj);  // obj Object {a: 1}

  // 查
  let map_exist = map.has('a');
  let set_exist = set.has(item);
  let obj_exist = 'a' in obj;
  console.log('map_exist', map_exist);  // map_exist true
  console.log('set_exist', set_exist);  // set_exist true
  console.log('obj_exist', obj_exist);  // obj_exist true

  // 改
  map.set('a', 2);
  item.a = 2;
  obj['a'] = 2;
  console.log('map', map);  // map Map {"a" => 2}
  console.log('set', set);  // set Set {Object {a: 2}}
  console.log('obj', obj);  // obj Object {a: 2}

  // 删
  map.delete('a');
  set.delete(item);
  delete obj['a'];
  console.log('map', map);  // map Map {}
  console.log('set', set);  // set Set {}
  console.log('obj', obj);  // obj Object {}
}
