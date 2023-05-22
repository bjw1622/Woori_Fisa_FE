function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brandon", undefined); // 잘못된 인수 개수 전달 시 에러 발생

// hello.ts -> hello.js로 변환 (트랜스파일, Transpile)

// 컴파일 vs 트랜스 파일
// tsc -version
// typescript compiler
// 컴파일 : 자연어 => 기계어
// 트랜스파일 : 비슷한 언어로 바꿔주는 것
