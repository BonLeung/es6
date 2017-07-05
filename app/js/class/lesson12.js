
{
  // 基本定义和生成实例
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }

  let v_parent = new Parent('v');
  console.log(v_parent);  // Parent {name: "v"}
}

{
  // 继承
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }

  class Child extends Parent {

  }

  let v_child = new Child();
  console.log(v_child); // Child {name: "mukewang"}
}

{
  // 继承传递参数
  class Parent {
    constructor(name = 'mukeang') {
      this.name = name;
    }
  }

  class Child extends Parent {
    constructor(name = 'child') {
      super(name);
      this.type = 'child';
    }
  }

  let child = new Child('hello');
  console.log(child); // _Child {name: "hello", type: "child"}
}

{
  // getter setter
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
    get longName() {
      return 'mk' + this.name;
    }
    set longName(value) {
      this.name = value;
    }
  }

  let parent = new Parent();
  console.log('getter', parent.longName); // getter mkmukewang
  parent.longName = 'hello';
  console.log('setter', parent.longName); // setter mkhello
}

{
  // 静态方法
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }

    static tell() {
      console.log('tell');
    }
  }
  Parent.tell();  // tell
}

{
  // 静态属性
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }

    static tell() {
      console.log('tell');
    }
  }

  Parent.type = 'test';

  console.log('静态属性', Parent.type); // 静态属性 test
}
