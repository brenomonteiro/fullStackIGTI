class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} falando...`);
  }
}

class Dog extends Animal{
  constructor(name,type){
    super(name);
    this.type = type;
  }

  speak() {
    console.log(`${this.name} (${this.type}) latindo...`);
  }
}

class Cat extends Animal{
  constructor(name,type){
    super(name);
    this.type = type;
  }

  speak() {
    console.log(`${this.name} (${this.type}) miando...`);
  }
}
const animal = new Animal('Totó');
animal.speak();

const dog = new Dog('jack','poodle');
dog.speak();

const cat = new Cat('jack','poodle');
cat.speak();