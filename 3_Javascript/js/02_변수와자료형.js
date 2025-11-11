// console.log(값);
// 브라우저 콘솔창에 괄호() 내부의 값을 출력
console.log(1234);
console.log("Hello World"); // 문자열은 양쪽에 쌍따옴표 작성
console.log('Hello World'); // JS는 홑따옴표도 문자열로 취급
// ========================================================

// 변수의 선언
// 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것

// [작성법]
// 변수종류 변수명;
// 변수종류: var, let, const
var number1; 

// 초기화: 변수에 값을 처음 할당하는 과정
// [작성법]
// 변수명 = 값;
number1 = 10;

// 콘솔에 number1 변수의 값을 출력
console.log(number1);

// 변수 선언 + 초기화
var number2 = 20;
console.log(number2);

// number1, number2 변수에 저장된 값을 더해서 출력
console.log(number1 + number2);

// 변수에 대입한 값 변경해보기
number1 = 300;  // number1에 300을 다시 대입
number2 = 400;  // number2에 400을 다시 대입

// 변경된 값 출력
// 1) 문자열 + 문자열/숫자/변수 == 이어쓰기
console.log("number1:" + number1);
console.log("100" + 100); // "100100"

// 2) 괄호 내부에 ,를 작성
console.log("number1:", number1);
// 각각 값을 독립적으로 출력
// >> 형변환 없이 출력되어 문자열 따로, 다른 데이터타입 따로 독립되어 출력됨


// ========================================================

// 2. let(변수, var의 변수명 중복 해결)

let number3 = 25;
// let number3 = 50;
// SyntaxError: Identifier 'number3' has already been declared

number3 = 50; // 재할당 가능
console.log("number3:", number3);

// ========================================================

// 3. const(상수, 값 변경 불가)
const PI = 3.141592653589793;
// PI = 100;
// TypeError: Assignment to constant variable.
// const로 선언된 변수는 재할당 불가

// const test;
// SyntaxError: Missing initializer in const declaration
// const는 선언과 동시에 초기화(값 대입) 필수

// ========================================================

// 블록 레벨 scope / 함수 레벨 scope

// 블록 레벨 scope (let, const)
// let과 const로 선언된 변수는
// 변수가 선언된 블록(중괄호 {}) 내부에서만 유효하다는 것을 의미함.

// 즉, 코드 블록 내부에서 선언한 변수(let, const)는 해당 블록 외부에서 접근할 수 없음.

let foo1 = 123; // 전역 변수
const foo2 = 456; // 전역 상수

{
  let foo3 = 789; // 지역 변수
  const foo4 = 101112; // 지역 상수
}

console.log(foo1);  // 전역변수라서 접근 가능
console.log(foo2);

// console.log(foo3); // ReferenceError: foo3 is not defined
// console.log(foo4); // ReferenceError: foo4 is not defined
// >> 둘 다 블록레벨 스코프이기 때문에 블록 밖에서 접근 불가능

// if, for, while, switch, try {} 등 >> 블록
// {}로 감싸진 범위면 전부 블록 레벨 스코프가 생김

// ========================================================

// 함수 레벨 스코프(var)
// var로 선언된 변수는 함수 내 어디서든 접근 가능
// if, for 등의 일반 블록은 무시하고, var로 선언된 변수가 있는 함수 전체에서 유효.

var test1 = 123; // 전역 변수

{ // 블록
  var test2 = 456; // 전역 변수
}

console.log(test1);
console.log(test2); // 블록 밖에서 접근 가능

function example() {
  // 함수 형태로 만들어진 코드 블록은 함수 레벨 스코프

  var test3 = 789; // 지역 변수
  console.log(test3); // 함수 내부에서만 접근 가능
}

example();  // 함수 호출

// console.log(test3); // ReferenceError: test3 is not defined
// 함수 외부에서는 접근 불가능

function example2() { // 함수 블록(함수레벨 스코프)
  
  if (true) { // 일반 블록(블록레벨 스코프)
    var x = 10; // 지역 변수
  }

  console.log(x); 
}

example2(); // 10
// if 블록 내부에서 선언된 var 변수 x에 함수 블록 전체에서 접근 가능


// ========================================================

// 1. var의 호이스팅
// >> var로 선언된 변수는 선언만 해당 스코프의 최상단으로
// 호이스팅됨. 초기화는 원래 코드 위치에서 수행된다.

// var a = 10; 

console.log(a); // undefined
// 선언은 호이스팅, 초기화는 호이스팅되지 않음
// 따라서 초기화 이전에 변수를 참조하면 undefined 출력

var a = 10; // 전역 스코프에 선언 + 초기화

console.log(a); 

// 2. let, const의 호이스팅
// let, const로 선언된 변수는 선언만 해당 스코프의 최상단으로 호이스팅됨
// var와 달리, let/const 로 선언된 변수는 초기화가 이루어지기 전에 사용 불가

// 내부적으로 let x; 선언은 끌어올려진 상태
// >> x의 선언이 호이스팅됨.
// 그러나 TDZ에 놓여 초기화 전까지 접근 불가
// 초기화가 이루어지기 전까지 해당 변수는 TDZ에 놓이게 되며
// 이 기간동안 변수에 접근하려고 하면 에러 발생


// TDZ(Temporal Dead Zone): 시간적으로 죽은 구역
// 코드 실행 과정에서 특정 시점까지 변수가 접근 불가능한 상태를 의미함
// >> JS에서 let/const 키워드로 선언된 변수가
// 초기화되기 전까지 접근할 수 없는 구간을 말함.

// console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 50;
console.log(x); // 50

// 이러한 특성 때문에 let/const는 var보다 예측 가능한 코드 작성 가능(지향됨)



// // ========================================================

// JS 자료형 확인하기
// typeof 연산자 : 변수/값의 자료형 출력 연산자

let undef;  // 변수 선언
console.log("undef:", undef, typeof undef);

// string(문자열) : "" 또는 ''로 감싸진 글자

const userName = "홍길동";
console.log("userName:", userName, typeof userName);

const phone = '010-1234-5678';
console.log("phone:", phone, typeof phone);

const gender = 'M'; 
console.log("gender:", gender, typeof gender);  // 홑따옴표에 한 글자만 작성해도 String 자료형임

// number (정수, 실수, 양수, 음수, 0 등 모든 숫자)
const age = 20; // 정수
const height = 175.5; // 실수(소수점 포함 숫자)
const eyesight = -1.5; // 음수

console.log("age:", age, typeof age);
console.log("height:", height, typeof height);
console.log("eyesight:", eyesight, typeof eyesight);

// boolean (논리값: true/false)
const isAdult = true; // 성인 여부
console.log("isAdult:", isAdult, typeof isAdult);

const hasJob = false; // 취업 여부
console.log("hasJob:", hasJob, typeof hasJob);


// object (객체 자료형)
// 값을 여러 개 저장할 수 있는 형태

// 1) 배열(array): 여러 값을 순서대로 저장하는 자료형
const numbers = [1, 2, 3, 4, 5];
console.log("numbers:", numbers, typeof numbers);

const fruits = ["apple", "banana", "cherry"];
console.log("fruits:", fruits, typeof fruits);

console.log("numbers 배열 값 중 0번째 : ", numbers[0], typeof numbers[0]);
console.log("numbers 배열 값 중 6번째 : ", numbers[6], typeof numbers[6]);
// >> 존재하지 않는 인덱스에 접근하면 undefined 출력
// 크기가 고정되지 않고 필요에 따라 자동으로 늘어나거나 줄어든다.

// 2) JS 객체
// 값을 K:V 쌍으로 여러 개 저장하는 자료형

// K: 값을 구분하는 이름(변수명과 비슷함)
// V: K에 대응되는 값(변두에 대입되는 값과 비슷)

const user = { id: "user01", pw: "pass01", age: 30 };

console.log("user:", user, typeof user);

// 객체에 존재하는 값을 하나씩 얻어오기
// 방법 1: 변수명['key']
console.log("user id:", user['id'], typeof user['id']);

// 방법 2: 변수명.key
console.log("user pw:", user.pw, typeof user.pw);

// 함수 (function)

// 작성법
// const 변수명 = function() {};

const sumFn = function(a, b) {
  return a + b; 
}   // 익명함수

/*
function sumFn(a, b) {
  return a + b;
}
*/ 

console.log(typeof sumFn); // function

console.log( sumFn(3, 5) ); // 8





