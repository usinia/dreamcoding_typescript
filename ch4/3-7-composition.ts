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

    constructor(
      coffeeBeans: number,
      private milk?: MilkFrother,
      private sugar?: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(
      coffeeBeans: number,
      milk?: MilkFrother,
      sugar?: SugarProvider
    ): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans, milk, sugar);
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
      //   return this.extract(shots);
      let coffee = this.extract(shots);
      if (this.sugar) coffee = this.sugar?.addSugar(coffee);
      if (this.milk) coffee = this.milk.makeMilk(coffee);
      return coffee;
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Fancy!!! Steaming some milk... 🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class ColdMilkSteamer implements MilkFrother {
    private makeBubbleOnMilk(): void {
      console.log("Make Bubble on cold milk... 🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.makeBubbleOnMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting som sugar from candy 🍭");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting som sugar from jar!!!");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  /*class CaffeeLatteeMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      public readonly serialNumber: string,
      private milkFrother: MilkFrother // dependency injection. 필요한 class 를 외부에서 주입 받음
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: SugarProvider) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const addMilk = this.milk.makeMilk(coffee);
      const addSugar = this.sugar.addSugar(addMilk);
      return addSugar;
    }
  }*/

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // Machine
  /*
  const sweetCandyMachine = new SweetCoffeeMaker(32, candySugar);
  const sweetMachine = new SweetCoffeeMaker(32, sugar);

  const latteMachine = new CaffeeLatteeMachine(12, "SS", cheapMilkMaker);
  const coldLatteeMachine = new CaffeeLatteeMachine(12, "SS", coldMilkMaker);
  const sweetLatteMachine = new SweetCaffeLatteMachine(
    12,
    cheapMilkMaker,
    candySugar
  );
  */
  const sweetCandyMachine = new CoffeeMachine(32, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(32, noMilk, sugar);

  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteeMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
