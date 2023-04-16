{
  type CoffeeCup = {
    shots: number;
    hasMilk: false;
  };

  class CoffeeMaker {
    static BEANS_CRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
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

    // this.coffeeBeans += 3 * this.BEANS_CRAMM_PER_SHOT;
    // const coffee = makeCoffee(2);
    // console.log(coffee);
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  // CoffeeMaker { BEANS_CRAMM_PER_SHOT: 7, coffeeBeans: 32 }
  // -> BEANS_CRAMM_PER_SHOT 은 class 에서 변하지 않는 값인데 instance 마다 값을 가지고 있음

  const maker2 = new CoffeeMaker(14);
  console.log(maker2);
  // after static variable. static 으로 선언한 후에는  instance 에서 사라진 것을 볼 수 있음.
  // CoffeeMaker { coffeeBeans: 32 }
  // CoffeeMaker { coffeeBeans: 14 }

  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3);
  // class level static function : Class.function();
  // instance level function : value = new Class; value.function();
}
