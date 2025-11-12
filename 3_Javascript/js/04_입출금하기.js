// prompt 사용 연습

// function test() {
//   const password = prompt("비밀번호를 입력하세요.");

//   console.log(password);

//   // 취소 >> null
//   // 확인 >> 입력한 값이 문자열로 저장됨

//   if (password == null) {
//     // 취소
//     alert("취소되었습니다.");
//   } else {
//     // 확인
//     if (password == "1234") {
//       // 지정한 비밀번호 1234가 맞는지 확인
//       alert("비밀번호가 일치합니다.");
//     } else {
//       alert("비밀번호가 일치하지 않습니다.");
//     }
//   }
// }

const amount = document.getElementById("amount");
const output = document.getElementById("output");

let balance = 10000;
const password = "1234";

output.innerText = balance.toLocaleString();

function deposit() {
  if (amount.value.length == 0) {
    alert("입금할 금액을 입력하세요.");
    return;
  }
  const value = Number(amount.value);
  balance += value;
  output.innerText = balance.toLocaleString();
  amount.value = "";
}

function withdrawal() {
  if (amount.value.length == 0) {
    alert("출금할 금액을 입력하세요.");
    return;
  }
  const value = Number(amount.value);
  const inputPassword = prompt("비밀번호를 입력하세요.");
  if (inputPassword == password) {
    if (value <= balance) {
      balance -= value;
      alert(`${value}원 출금이 완료되었습니다. 남은 잔액: ${balance}원`);
      // 템플릿 리터럴
      // 백틱`` 사용하여 문자열을 감싸고 ${} 안에 변수/값을 넣어 동적으로 문자열 생성
      output.innerText = balance.toLocaleString();
    } else {
      alert("출금 금액이 잔액보다 클 수 없습니다.");
    }
    amount.value = "";
  } else {
    alert("비밀번호가 일치하지 않습니다.");
  }
}
