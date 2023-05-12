// test(테스트 이름, 실제 테스트 코드를 작성할 콜백함수)
// 별칭으로 it 사용 가능

import { expect, test } from "vitest";
import { add } from "./calculator.js";

test("배열 내 모든 숫자 요소들의 합을 구해야 한다.", () => {
  const result = add([1, 2, 3]);
  expect(result).toBe(6); // result는 6일 것이다.
  expect(result).not.toBe(4);
});

///AAA패턴 적용
test("AAA패턴, 배열 내 모든 숫자 요소들의 합을 구해야 한다.", () => {
  // Arrange - 테스트를 수행하기 위한 의존성 준비하는 부분
  const numbers = [1, 2, 3];
  // Act - 테스트할 동작을 수행하는 부분
  const result = add(numbers);
  const initialValue = 0;
  const expectedResult = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  ); // Assert - 실제 테스트 단정문을 작성하는 부분
  expect(result).toBe(expectedResult);
});
