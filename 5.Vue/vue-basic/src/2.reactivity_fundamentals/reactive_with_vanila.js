let address = "삼성동";
let country = "of Korea";

let fullAddress = address + country;

// console.log(fullAddress);

// address = "수색동";

// 반응성을 구현하기 위해서는 JS에서 제공하는 Proxy 객체 활용
const info = {
  address: "삼성동",
  country: "of Korea",
  fulllAddress: "",
};

const handler = {};
const proxy = new Proxy(info, handler);
// console.log(proxy);

// proxy 객체로 target(info) 객체가 가진 프로퍼티에 접근 가능
// console.log(proxy.address);

// console.log(`fullAddress : ${proxy.fullAddress}`);

const handlerWithTrap = {
  get(target) {
    console.log("호출");
    console.log(target);
    return "한국";
  },
  set(target, property, value, receiver) {
    console.log("set 호출");
    console.log(target);
    if (property === "address") {
      target.address = value;
      target.fullAddress = value + target.country;
      console.log(receiver);
    }
  },
};

const proxy2 = new Proxy(info, handlerWithTrap);
console.log(proxy2.address);

proxy2.address = "수색동";
console.log(proxy2.address);
