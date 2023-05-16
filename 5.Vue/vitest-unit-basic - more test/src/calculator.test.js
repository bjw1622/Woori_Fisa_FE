// test(테스트 이름, 실제 테스트 코드를 작성할 콜백함수)
// 별칭(alias)으로 it 사용 가능
// https://vitest.dev/api/#test

import { describe, expect, test } from "vitest";
import { add } from "./calculator";

test.skip("배열 내 모든 숫자 요소들의 합을 구해야 한다.", () => {
  const result = add([1, 2, 3]);
  expect(result).toBe(6); // result는 6일 것이다.

  expect(result).not.toBe(4); // result는 4이 아닐 것이다.
});

// AAA패턴 적용
test.skip("AAA패턴, 배열 내 모든 숫자 요소들의 합을 구해야 한다.", () => {
  // Arrange - 테스트를 수행하기 위한 의존성 준비하는 부분(Given)
  const numbers = [1, 2, 3]; // add()에 전달할 dummy값

  // Act - 테스트할 동작을 수행하는 부분(When)
  const result = add(numbers);

  const initialValue = 0;
  const expectedResult = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  // Assert - 실제 테스트 단정문을 작성하는 부분(Then)
  expect(result).toBe(expectedResult);
});

// 테스트 스위트, 비슷한 테스트 관심사끼리 묶어두기 https://vitest.dev/api/#describe
describe("유효하지 않은 입력값", () => {
  test("1. 하나라도 공백 값이 전달 될 경우, NaN을 반환한다.", () => {
    // Arrange
    const numbers = [1, ""];

    // Act
    const result = add(numbers);

    expect(result).toBeNaN();
  });

  test("2. 문자열로 작성된 숫자값이 전달되어도 연산 결과를 반환한다.", () => {
    const numbers = ["1", "2"];

    const initialValue = 0;
    const expectedResult = numbers.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

    // Assert - 실제 테스트 단정문을 작성하는 부분(Then)
    expect(result).toBe(expectedResult);
  });

  test("3. 하나라도 숫자가 아닌 값이 전달될 경우, NaN을 반환한다.", () => {
    const inputs = ["invalid", 1];

    const result = add(inputs);

    expect(result).toBeNaN();
  });

  test("4. 빈 배열이 전달될 경우 0을 반환한다.", () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
  });
});
