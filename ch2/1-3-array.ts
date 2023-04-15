/* 2.8 배열과 튜플 */
{
  // Array
  const fruits: string[] = ["🍅", "🍌"];
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {
    // fruits.push(); // error occurred (readonly)
    // 전달 받은 파라미터의 값을 변경하지 못하도록 제한할 때 readonly 키워드 사용 (object의 불변성 보장)
    // Array<> 타입은 아직 지원하지 않기 때문에 첫 번째 유형으로만 사용
  }

  // Tuple : 서로 다른 타입을 함께 가질 수 있는 배열 -> interface, type alias, class 로 대체해서 사용하는 것을 추천
  let student: [string, number]; // 고정된 사이즈의 서로 다른 타입을 가질 때 사용
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  // 비추천 : 인덱스로 접근하는 것이 가독성이 떨어짐. object 나 class 로 대체 가능

  const [name, age] = student; // object destructor 해서 사용

  // ex) react 에서 const [countt, setCount] = useState(0);
}
