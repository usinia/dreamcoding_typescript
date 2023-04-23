// Java: Exception
// JavaScript: Errorr
// const array = new Array(10000000000000);

{
  // ch3/game.ts
  type Position = { x: number; y: number };
  const position: Position = { x: 0, y: 0 };
  function move(
    direction: "up" | "down" | "left" | "right" | "hehe"
  ): Position {
    switch (direction) {
      case "up":
        position.y += 1;
        break;
      case "down":
        position.y -= 1;
        break;
      case "left":
        position.x--;
        break;
      case "right":
        position.x++;
        break;
      default:
        // 개발자들이 type만 추가하고 처리 로직은 추가하지 않을 경우
        // never 타입을 이용하여 컴파일 단계에서 오류를 발생시켜 경고를 줄 수 있다.
        const invalid: never = direction;
        throw new Error(`unkown command type ${invalid}`);
    }
    return position;
  }
  console.log(position);
  move("up");
  console.log(position);
}
