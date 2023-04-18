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
