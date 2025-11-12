// 메뉴 주문
function check1() {
  // 메뉴 가격
  const gimbap = 3000;
  const ramen = 3500;
  const donkatsu = 5000;

  // 주문 개수 카운트
  let gCount = 0; // 김밥
  let rCount = 0; // 라면
  let dCount = 0; // 돈까스

  // 프롬프트로 입력한 값을 저장할 변수 선언
  let input; // undefined

  // 비교연산자
  // == (값이 동일한가?)
  // === (동일 비교 연산자: 값과 자료형이 동일한가?)

  while (input !== null) {
    // 취소 버튼을 눌렀을 때까지 반복
    input = prompt("메뉴 번호를 입력하세요!");

    switch (input) {
      case "1":
        gCount++;
        break;
      case "2":
        rCount++;
        break;
      case "3":
        dCount++;
        break;
      case null:
        alert("주문이 완료되었습니다.");
        break;
      default:
        alert("메뉴에 작성된 번호만 입력하세요.");
    }
  }

  alert(`김밥 : ${gCount}개, 라면 : ${rCount}개, 돈까스 : ${dCount}개`);
  let sum = gimbap * gCount + ramen * rCount + donkatsu * dCount;
  alert(`총 주문 금액은 ${sum}원 입니다.`);
}

// Up & Down 게임
function startGame() {
  // 1 ~ 200 사이 맞춰야하는 난수 생성
  const ans1 = Math.random() * 200 + 1;
  const answer = Math.floor(ans1); // 소수점 버림

  // 시도 횟수를 세기 위한 변수 선언
  let count = 0;

  // prompt에 출력할 문자열
  let str = "1부터 200 사이의 숫자 입력하기";

  while (true) {
    let input = prompt(str);

    if (input === null) {
      // 취소 버튼
      alert("게임 포기");
      break;
    }

    // 숫자 입력 후 확인 클릭 시
    const value = Number(input); // 입력받은 값 숫자로 변환

    // 숫자가 아닌 문자열이 잘못 입력된 경우
    // NaN (Not a Number) : 숫자가 아니다
    // isNaN(값) : 값이 NaN이면 true 반환

    if (isNaN(value)) {
      alert("숫자만 입력하세요!");
      continue;
    }

    if (value < 1 || value > 200) {
      alert("1부터 200 사이의 숫자만 입력하세요!");
      continue;
    }

    // 정답을 맞추기 위한 시도를 했기 때문에 count 1 증가
    count++;

    // 정답인 경우
    if (value === answer) {
      alert(`정답! (${answer}) 시도 횟수: ${count}`);
      break;
    }

    // 정답이 아닌 경우
    if (value < answer) {
      // 입력한 값이 정답보다 작은 경우
      str = `${value} [Up] / 시도 횟수 : ${count}`;
    } else {
      // 입력한 값이 정답보다 큰 경우
      str = `${value} [Down] / 시도 횟수 : ${count}`;
    }
  }
}
