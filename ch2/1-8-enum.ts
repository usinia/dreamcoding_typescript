/* 2.13 Enum 은 무엇이고 좋은것인가? */
{
  /**
   * Enum
   */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 }); // object 변경 불가 freeze
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday = 1,
    Tuesday,
    Wendesday,
    Thursdat,
    Friday,
    Saturday,
    Sunday,
  } // 자동은 0부터 시작, 숫자값을 정의하면 이후 +1씩 자동 증가, 문자열 값은 모두 할당해줘야 함
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  console.log(day);

  // typescript 에서는 가능한 한 사용하지 않는 것이 좋다.
  // day 에서는 어떠한 숫자값을 할당해도 이슈가 없다는 것이 문제임. Days 는 6까지만 포함하는데 숫자값을 할당해도 컴바일 오류가 나지 않는다. (tsc 1-8-enum.ts)
  // day = 10; // 실행 오류 남
  // console.log(day);

  // enum 대신 union type 을 사용할 수 있다.
  type DaysOfWeek =
    | "Monday"
    | "Tuesday"
    | "Wendesday"
    | "Thursdat"
    | "Friday"
    | "Saturday"
    | "Sunday";
  let dayOfWeek: DaysOfWeek = "Monday";
  console.log(dayOfWeek);
  dayOfWeek = "Sunday";
  console.log(dayOfWeek);
}
