const dog = {
  age: 2,
  name: "toto",
  walk: function walk() {
    console.log("강아지가 걷는다");
  },
};

console.log(dog.age);

// 특정 객체의 타입을 선언
// 사자는 항상 age와 name을 가지고 있다
let lion: { age: number; name: string };
lion = { age: 12, name: "Lion Heart~~" };

// 옵셔널(optional) 프로퍼티(? 기호 사용)
let tiger: { age: number; name?: string };

tiger = { age: 3 }; // name 프로퍼티는 선택이기 때문에 작성하지 않아도 됨

// 타입 별칭(type alias)를 활용하여 객체 타입 선언
// Cookie라는 커스텀 타입
type Cookie = {
  name: string;
  pubDate: number;
  company: string;
}; // type 키워드 사용, 대문자로 시작

let firstCookie: Cookie; // firstCookie의 타입은 Cookie

firstCookie = {
  name: "OREO",
  pubDate: 1913,
  company: "Nabisco",
};

let secondCookie: Cookie; // secondCookie의 타입은 Cookie

secondCookie = {
  name: "OREO",
  pubDate: 1913,
  company: "Nabisco",
};
