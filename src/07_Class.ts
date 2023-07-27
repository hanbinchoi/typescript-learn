/* 7. Class */

class Counter {
  value: number;
  constructor() {
    this.value = 0;
  }
  increase() {
    this.value++;
  }
  decrease() {
    this.value--;
  }
  getValue() {
    return this.value;
  }
}

let counter1 = new Counter();

counter1.increase();
console.log(counter1.getValue());

class Animal {
  name: string;
  constructor(theName) {
    this.name = theName;
  }

  speak(sound = "왕왕!") {
    console.log(`${this.name}(은/는) ${sound}하고 웁니다.`);
  }
}

class Mouse extends Animal {
  constructor(name) {
    super(name);
  }

  speak(sound = "찍찍") {
    super.speak(sound);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak(sound = "야옹") {
    super.speak(sound);
  }
}

let jerry = new Mouse("제리");
let tom = new Cat("톰");

jerry.speak();
tom.speak("냥냥");
