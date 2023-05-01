/**
 * Prototype : JavaScript 에서 객체지향 프로그래밍, 상속을 위해 사용, 코드를 재사용하기 위해 만들어짐
 */
const x = {};
const y = {};

console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);
console.log(array.__proto__); // Array
console.log(array.__proto__.__proto__); // Object

console.clear();
function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  //   this.makeCoffee = (shots) => {
  //     console.log(`making... ${shots} ☕️`);
  //   };
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log(`making... ${shots} ☕️`);
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype); // 상속, 연결

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee(2);
