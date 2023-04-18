interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// <generic> 인데 Employee 를 확장한 generic 이야
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const usinia = new FullTimeEmployee();
const ellie = new PartTimeEmployee();

usinia.workFullTime();
ellie.workPartTime();

const afterPayUsinia = pay(usinia);
const afterPayEllie = pay(ellie) as PartTimeEmployee; // 정말 확실하다면 강제 캐스팅을 통해 접근할 수 있음

afterPayUsinia.pay(); // workFullTime 를 잃어버림
afterPayEllie.workPartTime();

// const test = pay(13); // error occurred

const obj = {
  name: "usinia",
  age: 20,
};

const obj2 = {
  animal: "🐶",
};

/**
 * *** 별표 백개 ***
 * 처음 인자는 제네릭 T 야
 * 두번째 인자는 제네릭 K 인데 이건 T 의 키 값이야
 * 리턴하는 값은 제네릭인데 T에서 K 키가 가진 값이야
 */
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, "name"));
// console.log(getValue(obj, "score")); // error occurred
console.log(getValue(obj, "age"));
console.log(getValue(obj2, "animal"));
