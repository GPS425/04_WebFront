// 입력된 키 Q, W, E, R 확인하기

// 키보드를 누르고 있을 때 : keydown
// 키보드를 뗄 때 : keyup

// toUpperCase(): 소문자를 대문자로 변경
// toLowerCase(): 대문자를 소문자로 변경

// 이벤트가 일어나는 대상이 누구인가? document
// document: 문서 전체를 의미

const keyQ = document.querySelector(".key-box > div:nth-child(1)");
const keyW = document.querySelector(".key-box > div:nth-child(2)");
const keyE = document.querySelector(".key-box > div:nth-child(3)");
const keyR = document.querySelector(".key-box > div:nth-child(4)");

document.addEventListener("keydown", function(e) {

  switch (e.key.toUpperCase()) {
    case "Q":
      keyQ.style.backgroundColor = "magenta";
      break;
    case "W":
      keyW.style.backgroundColor = "magenta";
      break;
    case "E":
      keyE.style.backgroundColor = "magenta";
      break;
    case "R":
      keyR.style.backgroundColor = "magenta";
      break;
    }
});

document.addEventListener("keyup", function(e) {
  switch (e.key.toUpperCase()) {
    case "Q":
      keyQ.style.backgroundColor = "white";
      break;
    case "W":
      keyW.style.backgroundColor = "white";
      break;
    case "E":
      keyE.style.backgroundColor = "white";
      break;
    case "R":
      keyR.style.backgroundColor = "white";
      break;
    }
});


/*
const keys = document.querySelectorAll(".key");

document.addEventListener("keydown", function(e) {
  let idx;  // 인덱스 값을 저장할 변수

  // 입력된 키를 소문자로 바꿔서 일치하는 case 실행

  switch(e.key.toLowerCase()) {
    case "q": idx = 0; break;
    case "w": idx = 1; break;
    case "e": idx = 2; break;
    case "r": idx = 3; break;
    default: return;  // 일치하는 키가 없으면 함수 종료
  }
    
  // idx번호와 일치하는 keys 배열의 요소 배경색을 변경
  keys[idx].style.backgroundColor = "magenta";
});

document.addEventListener("keyup", function(e) {
  let idx;  // 인덱스 값을 저장할 변수

  // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
  switch(e.key.toLowerCase()) {
    case "q": idx = 0; break;
    case "w": idx = 1; break;
    case "e": idx = 2; break;
    case "r": idx = 3; break;
    default: return;  // 일치하는 키가 없으면 함수 종료
  } 
  // idx번호와 일치하는 keys 배열의 요소 배경색을 변경
  keys[idx].style.backgroundColor = "white";
});
*/

//==========================================================

/*
// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");
const keyMap = {
  "q": 0,
  "w": 1,
  "e": 2,
  "r": 3
};

// 이벤트가 감지되었을 때 실행해야하는 함수(ex) changeKeyColor)
// 만약 해당 함수에 전달할 인자가 없는 경우
// >> 함수명만 써도 됨("keydown", changeKeyColor)
// >> changeKeyColor 함수 선언부의 매개변수에서 이벤트 객체 (e)를 가져다 쓸 수 있음
// 만약 해당 함수에 전달할 인자가 있는 경우
// >> 익명함수 형태로 작성할 것 (e) => {}
// 전달인자의 1번째 값은 e를 넘겨주기, 2번째 전달인자부터 내가 전달하고 싶은 데이터 나열
// >> ("keydown", (e) => changeKeyColor(e, "deeppink"))

// 키보드 이벤트 핸들러 함수
// JS Object
// 객체명[key] >> 매핑된 value
// 객체명.key >> 매핑된 value
function changeKeyColor(e, color) {
  const idx = keyMap[e.key.toLowerCase()];    // keyMap['q'] >> 0, keyMap['w'] >> 1...

  // keyMap['a'] >> undefined

  // keyMap에 없는 값 입력되면 idx는 undefined
  if (idx !== undefined) {  
    keys[idx].style.backgroundColor = color;
  }
}

// 키가 눌렸을 때 / 떼어졌을 때
document.addEventListener("keydown", (e) => changeKeyColor(e, "deeppink"));
document.addEventListener("keyup", (e) => changeKeyColor(e, "white"));




*/
