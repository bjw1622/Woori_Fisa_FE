let userName; // userName은 string 타입만 받을 수 있도록 제한
userName = "Yoo";
console.log(userName);
// 타입 추론
// 5는 number이기 때문에 number 타입으로 추론 됨
const allUsers = 5;
// 리터럴 타입:5, '문자열'과 같은 값 그 자체가 타입
// 1,2,3,4,5 -> number
