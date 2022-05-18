// 设计一个观察者模式

// UserSubject 是一个被观察的类，数据发生变更后会通知观察者
class UserSubject {
  constructor() {
    this.state = null;
    this.observers = [];
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
    this.$notify();
  }

  $attach(observer) {
    this.observers.push(observer);
  }

  $notify() {
    this.observers.forEach((observer) => observer.update(this.state));
  }
}

// Fullname 是一个观察者，在创建观察者的时候，接受被观察对象，和回调函数
class FullnameObserver {
  constructor(subject, cb) {
    subject.$attach(this);
    this.cb = cb;
  }

  update(state) {
    this.cb(state);
  }
}

function run() {
  const user = new UserSubject({
    firstName: '',
    lastName: '',
  });

  new FullnameObserver(user, (state) => {
    console.log(state.firstName + state.lastName + ' yyds!');
  });

  user.setState({
    firstName: 'foo',
    lastName: 'bar',
  }); // 输出 foobar yyds!
}

run();
