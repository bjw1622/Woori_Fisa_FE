// const message = "Hello World!";
// const lower = message.toLocaleLowerCase();
// console.log(lower);

// 컴파일 언어, 런타임 언어
const message = () => {
  console.log("Hello World!");
};

console.log(typeof message);

if (typeof message === "function") {
  message();
}

const printLength = (value) => {
  console.log(`이 문자열의 길이는 ${value.length}`);
};

printLength("안녕하세요");
printLength(5);
// undefined, 함수를 호출할 때부터 정확한 타입을 전달하는 방법?? => TypeScript
// TypeScript => 새로운 프로그래밍 언어는 아니고, JS에 슈퍼셋, JS에 Type을 씌웠다.
