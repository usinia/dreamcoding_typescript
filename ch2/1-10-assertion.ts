/* 2.15 건방진 녀석 Type Assertion */
{
  /**
   * Type Assertions 💩
   */
  // type 을 강요하는 것

  // JavaScript
  function jsStrFunc(): any {
    return "hello";
    // return 2;
  }
  const result = jsStrFunc(); // return any
  console.log(result.length); // return string 인 것을 알지만 js function 이기 때문에 any 타입이라서 string 의 함수를 쓰지 못한다.
  // 아래의 2가지 방법으로 casting 해서 string 이 지원하는 함수를 사용 가능
  console.log((result as string).length);
  console.log((<string>result).length);
  // return 타입이 확실할 때만 강요해서 사용해야하며, string 이 아닌 number 가 return 되는 경우 undefined 가 출력됨

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱
  // 실행 오류로 프로그램이 죽음. 정말 장담하는 경우가 아니라면 사용하지 않는 것이 더 좋다.

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers!.push(2); // undefined 일 수도 있는데 push 를 하려고 하니 오류가 발생.

  const button = document.querySelector("class")!; // 100% 값이 있다고 보장할 수 있는 경우에 ! mark 를 사용해서 할당할 수 있음
}
