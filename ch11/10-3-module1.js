/**
 * 모듈화를 통해 파일 간 이름 충돌을 방지하고, 코드를 분리함으로써 모듈성과 재사용성이 향상됨
 */

export default function add(a, b) {
  return a + b;
}

export function print() {
  console.log("print");
}

export const number = 10;
