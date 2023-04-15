/* 2.3 기본 타입 정리 1 */
{
  // JavaScript
  // old: var 💩
  //   var age = 5;
  //   age = 1;

  // let es6
  let name = "hello";
  name = "hi";

  // const
  const age = 5;
  //   age = 5; // error occurred
}

/* 2.4 기본 타입 정리 2 */
{
  /**
   * Javascript
   * Primitive(원시): number, string, boolean, bigint, symbon, null, undefined
   * Object(참조): function, array...
   */

  // number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined 💩
  let name: undefined; // 💩
  let age: number | undefined; // number 이거나 optional 해서 정해지지 않음 (보편적으로 많이 사용)
  age = undefined; // 할당되지 않거나
  age = 1; // number 값을 가진다

  function find(): number | undefined {
    return undefined;
  }

  // null 💩
  let person: null; // 💩
  let person2: string | null; // 데이터가 있을수도 없을수도 있음
}

/* 2.5 기본 타입 정리 3 */
{
  // unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message); // never : 나는 오류가 나면 아무것도 리턴하지 않으니까 감안해서 코딩해!
    /* while (true) {
      // 무한 반복
    } */
    // return;
  }

  // object
  let obj: object = [1, 2, 3];
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "usinia" });
  acceptSomeObject({ animal: "dog" });
}
