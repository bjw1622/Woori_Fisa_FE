// source ~ : 번역할 텍스트, 번역할 언어의 타입(ko, ja...)
// target ~ : 번역 결과 텍스트, 번역될 언어의 타입(ko, ja...)

const [sourceSelect, targetSelect] =
  document.getElementsByClassName("form-select");

const [sourceTextArea, targetTextArea] =
  document.getElementsByClassName("textarea");

let targetLanguage = "en"; //번역될 언어의 타입, 초기값은 en

//번역될 언어의 타입 변경 이벤트
targetSelect.addEventListener("change", (event) => {
  targetLanguage = event.target.value;
});

//번역할 텍스트 값 입력받는 이벤트
let debouncer; //timeid 저장
// 디바운싱 & 쓰로틀링
sourceTextArea.addEventListener("input", (event) => {
  if (debouncer) clearTimeout(debouncer);
  debouncer = setTimeout(async () => {
    const text = event.target.value; //번역할 텍스트
    const url = "/detect";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: text }),
    };
    await fetch(url, options) // axios 라이브러리 사용 시 json 처리 추상화
      .then((response) => response.json())
      .then((data) => {
        sourceSelect.value = data.langCode;
      });
    // 여기까지 언어 감지

    const urlTranslate = "/translate";
    const optionsTranslate = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: sourceSelect.value, //원본 언어
        target: targetSelect.value, // 목적 언어
        text: event.target.value, // 번역할 텍스트
      }),
    };
    fetch(urlTranslate, optionsTranslate) // axios 라이브러리 사용 시 json 처리 추상화
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message.result.translatedText);
        targetTextArea.value = data.message.result.translatedText;
      })
      .catch((e) => {
        console.error(error);
      });
  }, 2000); //2초 후에 callback 실행
});

// source ~ : 번역할 텍스트, 번역할 언어의 타입(ko, ja..)
// target ~ : 번역 결과 텍스트, 번역될 언어의 타입(ko, ja..)

// const [sourceSelect, targetSelect] =
//   document.getElementsByClassName("form-select");
// const [sourceTextArea, targetTextArea] =
//   document.getElementsByClassName("textarea");

// let targetLanguage = "en"; // 번역될 언어의 타입, 초기값은 en(English)

// // 번역될 언어의 타입 변경 이벤트
// // English면 en 출력, 한국어면 ko 출력되도록
// targetSelect.addEventListener("change", (event) => {
//   // console.log(event.target.value); // select박스의 option 태그 내 value 어트리뷰트값을 취득
//   targetLanguage = event.target.value;
// });

// // 번역할 텍스트 값 입력받는 이벤트
// // 디바운싱 & 쓰로틀링
// let debouncer; // timerID 값을 저장하는 변수
// sourceTextArea.addEventListener("input", (event) => {
//   if (debouncer) clearTimeout(debouncer);

//   debouncer = setTimeout(async () => {
//     const text = event.target.value; // 번역할 텍스트

//     /*
//             서버에 HTTP 요청 전송을 위한 준비 코드
//             1. 요청 URL
//             2. 전송 데이터: HTTP Body(몸체)에 작성
//             3. 몇 가지 메타정보: HTTP Header에 작성
//         */
//     const result = await detectLanguage(text);

//     // 언어 번역 요청 전송
//   }, 2000); // 2초 후에 콜백함수 동작
// });

// const detectLanguage = async (text) => {
//   let sourceLanguage;

//   // 첫 번째 요청: 언어 감지 기능 -> server.js(Node서버)로 전송
//   const url = "/detect";
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ query: text }),
//   };

//   await fetch(url, options) // axios라이브러리 사용 시 json 처리 추상화
//     .then((response) => response.json())
//     .then((data) => {
//       sourceLanguage = data.langCode;
//       sourceSelect.value = sourceLanguage;
//     })
//     .catch((error) => console.error(error));

//   return sourceLanguage;
// };

// const translateLanguage = async (sourceLanguage, text) => {
//   const url = "/translate";

//   const body = {
//     source: sourceLanguage,
//     target: targetLanguage,
//     text, // text: text와 같다.
//   };

//   // Node서버로 언어 번역 요청 전송
//   await fetch(url, optionsFrom("POST", body))
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// };

// // 유틸 메서드, optionsFrom(ddd, ddd, ddd);
// const optionsFrom = (method, body, headers) => {
//   // const options = {
//   //     method,
//   //     headers: {
//   //         'Content-Type': 'application/json',
//   //         ...headers,
//   //     },
//   //     body: JSON.stringify(body),
//   // }

//   // return options;

//   return {
//     // 리터럴 형태로 바로 반환
//     method,
//     headers: {
//       "Content-Type": "application/json",
//       ...headers,
//     },
//     body: JSON.stringify(body),
//   };
// };
