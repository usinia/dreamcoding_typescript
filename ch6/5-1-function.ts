{
  /**
   * Generic 타입
   * 사용하는 사람이 어떤 타입인지 결정할 수 있고,
   * 유연하지만 (like any) 컴파일시 타입을 보장 받을 수 있음
   */

  function checkNotNullBad(arg: number | null): number {
    if (arg == null) throw new Error("not valid number!");
    return arg;
  }
  // bad: number 외 타입에 대해 모두 만들어 줘야함

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) throw new Error("not valid any!");
    return arg;
  }
  // bad: any는 어떤 타입이든 담을 수 있기 때문에 타입을 보장할 수 없음

  const result: string = checkNotNullAnyBad(123);

  function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
    if (arg == null) throw new Error(`not valid ${arg} !`);
    return arg;
  }

  function commonUse<T>(arg: T | null): T {
    if (arg == null) throw new Error(`not valid ${arg} !`);
    return arg;
  }

  const number: number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
  //   const boal: string = checkNotNull(true); // compile error
}
