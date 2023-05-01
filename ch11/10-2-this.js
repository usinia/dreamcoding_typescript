console.log(this);

function simpleFunc() {
  console.log(this);
}
simpleFunc(); // global 에서 함수 호출은 window.simpleFunc() 와 동일

console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
  arrow = () => console.log(this); // arrow function 은 counter 에 종속된다.
}
const counter = new Counter();
counter.increase();
const caller = counter.increase; // this 의 정보를 잃어버림
caller(); // undefined
// let과 const로 선언한 변수는 window에 등록되어 있지 않으므로 caller를 호출하는 것은 window가 아니라 그 어떤 object도 아니기 때문에 this 는 undefined 로 나온다.
const caller2 = counter.arrow;
caller2();

// --- console 보충설명 ---
// 함수를 선언하면 기본적으로 window 객체에 등록됨
function helloWorld() {
  console.log("hello");
}
window.helloWorld();

// const 나 let 으로 선언한 변수는 window 객체에 등록되지 않는다.
const usinia = "usinia";
let bob = "bob";
window.usinia; // X

// var는 호이스팅되면서 window 객체에 등록됨
var badVar = "bad";
window.badVar;
// --- console 보충설명 ---

class Jay {}
const jay = new Jay();
jay.run = counter.increase;
jay.run();
jay.increase = counter.increase.bind(counter); // bind 로 this를 묶어두면 잃어버리지 않는다.
jay.increase();
