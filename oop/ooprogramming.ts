class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello, I am " + this.name);
  }
}

const p = new Person("Ravi");
p.sayHello();
