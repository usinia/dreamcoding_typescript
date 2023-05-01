{
  /**
   * Interface : 규격사항, 서로간에 상호작용을 위한 계약서. 구현사항에 대한 약속
   * Types : 데이터의 모습, 타입
   */
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ⭑
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  }; // --> z의 값도 넣어줘야 함

  // class ⭑
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  } // 상속을 통해 확장 가능
  type ZPositionType = PositionType & { z: number }; // intersaction 을 통해 2가지 type 을 묶은 type을 만들 수 있음

  // 😆 only interfaces can be merged.
  // interface 는 자동으로 결합됨 -->
  interface PositionInterface {
    z: number;
  }
  // 중복 선언 불가
  // type PositionType {}

  // 😆 Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; // string
  type NumberType = number;
  type Direction = "let" | "right";
}
