{
  /**
   * 상속의 문제점
   * 수직적 -> 부모 클래스에서 수정이 생기면 이를 상속 받는 모든 자식도 영향을 받는 치명적 단점
   * 새로운 기능을 도입할 때 어떻게 상속 구조를 가져갈지에 대한 복잡성 증가
   * 클래스는 하나의 부모 클래스만 상속 받을 수 있음 (인터페이스는 여러 개의 인터페이스를 구현할 수 있지만, 클래스는 여러 개의 클래스를 상속 받을 수 없음)
   */
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean; // optional
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_CRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    protected constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log("cleaning the machine...🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_CRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots & CoffeeMachine.BEANS_CRAMM_PER_SHOT;
    }
    private preheat(): void {
      console.log("heating up... 🔥");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeeLatteeMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return { ...coffee, hasMilk: true };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return { ...coffee, hasSugar: true };
    }
  }

  const machines: CoffeeMaker[] = [
    CoffeeMachine.makeMachine(16),
    new CaffeeLatteeMachine(16, "S1"),
    new SweetCoffeeMaker(16),
    CoffeeMachine.makeMachine(16),
    new CaffeeLatteeMachine(16, "S1"),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log("------------------");
    machine.makeCoffee(1);
  });
}
