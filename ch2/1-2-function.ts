/* 2.6 함수 타입 이용 */
// {
//   // JavaScript 💩
//   function jsAdd(num1, num2) {
//     return num1 + num2;
//   }

//   // TypeScript ✨
//   function add(num1: number, num2: number): number {
//     return num1 + num2;
//   }

//   // JavaScript 💩
//   function jsFetchNum(id) {
//     // code ...
//     // code ...
//     return new Promise((resolve, reject) => {
//       resolve(100);
//     });
//   }

//   // TypeScript ✨
//   function fetchNum(id: string): Promise<number> {
//     // code ...
//     // code ...
//     return new Promise((resolve, reject) => {
//       resolve(100);
//     });
//   }
// }

/* 2.7 함수 타입 이용 */
{
  // Javascript => TypeScript
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // default value가 없기 때문에 undefined 가 출력됨
  }
  printName("Steve", "Jobs");
  printName("usinia"); // string | undefined 일 경우 undefined 값을 항상 넘겨줘야 함
  printName("Anna", undefined);

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message); // 값이 없으면 default value 가 출력됨
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));
}
