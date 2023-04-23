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
      case "hehe": // 처리 로직을 추가하면 더 이상 invalid 변수에서 컴파일 오류가 발생하지 않는다.
        break;
      default:
        // 개발자들이 type만 추가하고 처리 로직은 추가하지 않을 경우
        // never 타입을 이용하여 컴파일 단계에서 오류를 발생시켜 경고를 줄 수 있다.
        const invalid: never = direction;
        throw new Error(`unkown command type ${invalid}`);
    }
    return position;
  }
  //   console.log(position);
  //   move("up");
  //   console.log(position);
}

{
  // Error(Exceptioon) Handling: try -> catch -> finally

  function readFile(fileName: string): string {
    if (fileName === "not exists!💩") {
      throw new Error(`file now exists! ${fileName}`);
    }
    return "file contents🗒️";
  }
  function closeFile(fileName: string) {
    console.log(`${fileName} is closed`);
  }

  function run(fileName: string): void {
    try {
      console.log(readFile(fileName));
    } catch (error) {
      console.log(`catched!!`);
      return;
    } finally {
      closeFile(fileName);
    }
    console.log("after try catch finally");
  }

  const existsFileName = "file";
  const notExistsFileName = "not exists!💩";
  const fileName = notExistsFileName;
  run(fileName);
}
