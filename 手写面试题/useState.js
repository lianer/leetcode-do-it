class Def {
  constructor() {
    this.subject = null;
    this.index = 0;
    this.states = new Map();
  }

  start(subject) {
    this.subject = subject;
    this.index = 0;
  }

  stop() {
    this.subject = null;
  }

  getState() {
    return this.states.get(this.subject)[this.index++];
  }

  addState(initialValue) {
    const queue = this.states.get(this.subject) || [];
    const setValue = (newValue) => {
      item[0] = newValue;
    };
    const item = [initialValue, setValue];
    queue.push(item);
    this.states.set(this.subject, queue);
  }

  hasState() {
    return this.states.has(this.subject);
  }
}

const def = new Def();

const useState = function (initialValue) {
  if (def.hasState()) {
    return def.getState();
  }

  def.addState(initialValue);
  return def.getState();
};

function Foo() {
  const [a, setA] = useState(1);
  setA(2);
  console.log(a);
}

function Bar() {
  const [name, setName] = useState('jack');
  setName('Bom');
  console.log(name);
}

function render(comp) {
  def.start(comp);
  comp();
  def.stop();
}

render(Foo);
render(Foo);
render(Bar);
render(Bar);
