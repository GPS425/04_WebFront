// 정규표현식 객체 생성 + 확인
document.querySelector("#btn1").addEventListener("click", () => {

  // 정규표현식 객체 생성
  const regExp1 = new RegExp("script");
  // "script"와 일치하는 문자열이 있는지 검사하는 정규표현식

  const regExp2 = /java/;
  // "java"와 일치하는 문자열이 있는지 검사하는 정규표현식

  // 확인하기
  const str1 = "저희는 지금 javascript를 공부하고 있읍니다";
  const str2 = "jsp(java server page)는 언젠가 할듯";
  const str3 = "java java java";

  console.log(regExp1.test(str1));
  console.log(regExp1.exec(str1));
  // 문자열에 정규표현식과 일치하는 패턴이 있을 경우
  // **처음** 매칭되는 문자열 반환, 없으면 null 반환
  // index는 0부터 시작

  console.log(regExp2.test(str2));
  console.log(regExp2.exec(str2));
  
  console.log(regExp2.test(str3));
  console.log(regExp2.exec(str3));
});

// 메타문자 확인하기
document.querySelector("#btn2").addEventListener("click", () => {

  // [abcd]
  const regExp1 = /[abcd]/;
  console.log(regExp1.test("apple")); // true
  console.log(regExp1.test("ssbss")); // true
  console.log(regExp1.test("qwerty")); // false

  // ^ (캐럿)
  const regExp2 = /^group/; // 문자열의 시작이 group인지 확인
  console.log(regExp2.test("group100"));  // true

  // $ (달러)
  const regExp3 = /group$/;   // 문자열의 끝이 group으로 끝나는지 확인
  console.log(regExp2.test("group100"));  // false
  console.log(regExp3.test("100group"));   // true

});

// 이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup", (e) => {
  
  // 결과 출력용 span 요소 얻어오기
  const span = document.getElementById("inputNameResult");

  // 한글 2 ~ 5글자 정규표현식 객체 만들기
  const regExp = /^[가-힣]{2,5}$/;

  // 빈 칸인지 검사
  if(e.target.value.length == 0){
    span.innerText = "";
    return;
  }

  // 유효성 검사
  if(regExp.test(e.target.value)) { // 한글 2~5글자 유효한 값을 작성한 경우
    span.innerText = "유효한 이름 형식입니다.";
    span.style.color = "green";
    span.style.fontWeight = "bold";
  } else {  // 유효하지 않은 값 작성한 경우
    span.innerText = "유효하지 않은 형식입니다.";
    span.style.color = "red";
    span.style.fontWeight = "bold";
  }
});

// 생년월일(숫자 6자리)-고유번호(숫자 7자리)
document.getElementById("inputPno").addEventListener("keyup", (e) => {
  const span = document.getElementById("inputPnoResult");

  const regExp = /^[0-9]{6}-[0-9]{7}$/;

  if(e.target.value.length == 0){
    span.innerText = "";
    return;
  }

  if(regExp.test(e.target.value)) {
    span.innerText = "유효한 주민등록번호입니다."
    span.style.color = "green";
    span.style.fontWeight = "bold";
  } else {
    span.innerText = "유효하지 않은 형식입니다.";
    span.style.color = "red";
    span.style.fontWeight = "bold";
  }

});



