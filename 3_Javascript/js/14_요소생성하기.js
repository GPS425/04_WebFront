// 클릭할 버튼 요소 얻어오기
const createBox = document.querySelector("#createBox");

// 컨테이너 요소 얻어오기
const container = document.querySelector('.container');

createBox.addEventListener("click", () => {

  // 1. div 요소 생성
  const box = document.createElement("div");
  console.log(box);
  // >> <div></div> 생성함

  // 2. 방금 만들어진 div 요소에 box 클래스 부여하기
  box.classList.add("box");
  // classList: 해당 요소가 가진 클래스 목록을 객체 형태로 반환함.
  // >> <div class="box"></div>

  // 3. input 요소 생성(+ 속성 부여)
  const input = document.createElement("input");
  // <input>

  // input 요소의 'type' 속성(Attribute)에 "text"라는 값을 대입
  // input.속성명 = "값" 형태로 속성 설정이 가능함.
  input.type = "text";
  // <input type="text">
  
  // 4. 생성된 input을 box의 마지막 자식으로 추가
  box.append(input);

  /*
  <div class="box">
    <input type="text">
  <div>
  */

  // 5. 만들어진 div요소 container의 마지막 자식으로 추가
  container.append(box);
});

console.log(container.classList);

/* 
요소.classList : 해당 요소의 클래스 목록 반환(배열 형태)
>> 클래스 존재 여부, 추가, 제거 등

요소.classList
>> 요소 클래스 목록이 배열 형식으로 반환

요소.classList.contains("클래스명")
>> 해당 클래스가 존재하는지 확인, true/false 형태로 반환

요소.classList.add("클래스명")
>> 새로운 클래스 추가

요소.classList.remove("클래스명")
>> 기존 클래스 제거

*/

// innerHTML로 요소 추가하기

const innerHTMLBox = document.querySelector("#innerHTMLBox");
// ID가 #innerHTMLBox인 버튼 요소(클릭할 요소)를 가져옴.

// innerHTMLBox 버튼에 '클릭' 이벤트 리스너를 등록함.
innerHTMLBox.addEventListener("click", () => {
  // .container 요소의 '기존 HTML 내용' 뒤에
  // 새로운 HTML 문자열을 '추가'함.
  container.innerHTML += "<div class='box'><input type='text'></div>"
});






