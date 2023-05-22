export {};

type CookieWithCompany = {
  name: string;
  company: string;
};

type CookieWithTaste = {
  name: string;
  taste: string;
};
// Union 타입, Cookie 타입은 Company 혹은 Taste 타입을 받을 수 있는 타입이다.
type Cookie = CookieWithCompany | CookieWithTaste;

const firstCookie: Cookie =
  Math.random() > 0.5
    ? { name: "OREO", company: "Nabisco" }
    : { name: "OREO", taste: "Choco" };

//Company든, Taste든 둘 다 name 프로퍼티는 존재
console.log(firstCookie.name);

// 타입 좁히기(Narrowing)
// firstCookie에 compay 프로퍼티가 존재할 경우, 접근 가능
if ("company" in firstCookie) {
  firstCookie.company;
}

if ("taste" in firstCookie) {
  firstCookie.taste;
}
// or
if ("company" in firstCookie) {
  firstCookie.company;
} else {
  firstCookie.taste;
}
