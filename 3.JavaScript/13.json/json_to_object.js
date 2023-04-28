/**
 * 반대로 서버가 클라이언트 쪽으로 응답한 JSON 데이터는 문자열
 * 이 문자열을 JS에서 다시 사용하기 위해서는 문자열 포맷을 다시 JS 전용 객체 리터럴로 변환해야함.
 * 문자열 포맷을 객체로 변환, 즉 객체화하는 것을 역직렬화(deserialization)라고함.
 */

const book = { 
    id: 1, 
    title: "하농", 
    author: "하농", 
    isSold: false 
};

const books = [
    { id: 1, title: "하농", author: "하농", isSold: false },
    { id: 2, title: "체르니", author: "체르니", isSold: true },
    { id: 3, title: "부르크뮐러", author: "부르크뮐러", isSold: true },
]
