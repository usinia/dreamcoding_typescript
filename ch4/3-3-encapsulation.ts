{
  type CoffeeCup = {
    shots: number;
    hasMilk: false;
  };

  class CoffeeMaker {
    private static BEANS_CRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_CRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_CRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(14);
  console.log(maker);

  // 4.10 getter & setter
  class User {
    /*
    firstName: string;
    lastName: string;
    // fullName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      //   this.fullName = `${firstName} ${lastName}`;
    }
    */
    constructor(private firstName: string, private lastName: string) {}
    // 자동으로 private firstName 이 선언되고 값도 할당 됨

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num > 0) {
        // setter 에서 값 유효성 검사 로직도 추가할 수 있음
        this.internalAge = num;
      }
    }
  }

  const user = new User("Steve", "Jobs");
  console.log(user);
  //   user.firstName = "usinia";
  console.log(user.fullName);

  user.age = 32;
  console.log(user);
}
