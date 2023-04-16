/* 2.14 타입 추론은 무엇이고, 써도 되나? */
{
  /**
   * Type Inferrence
   */
  let text = "hello"; // text:string
  //   text = 1; // number 할당할 때 오류 발생
  function print(message = "hello") {
    // any type warning
    // 1. type 명시 (ex: string)
    // 2. default value 할당 (default value 의 type 으로 추론)
    console.log(message);
  }
  print("hello");
  // print(1);// error occurred

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2); // type 자동 추론
}
