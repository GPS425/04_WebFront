// 배열 선언 및 기초 사용법

function check1() {
  // 배열 선언 방법 확인
  const arr1 = new Array(); // Array 생성자 사용
  const arr2 = new Array(5); // 길이가 5인 배열 생성
  const arr3 = [];
  const arr4 = ["사과", "바나나", "체리"];

  console.log(arr1); // []
  console.log(arr2); // [ <5 empty items> ]
  console.log(arr3); // []
  console.log(arr4); // [ '사과', '바나나', '체리' ]

  // 배열명.length
  // >> 배열의 길이(요소의 개수)를 반환
  console.log(arr1.length); // 3
  console.log(arr2.length); // 3
  console.log(arr3.length); // 3
  console.log(arr4.length); // 3

  // 배열의 index
  // 배열명[index]
  // >> 배열의 해당 인덱스에 저장된 데이터를 반환
  console.log(arr4[0]); // '사과'
  console.log(arr4[1]); // '바나나'
  console.log(arr4[2]); // '체리'

  // 배열명[index] = 값;
  arr2[0] = 100;
  arr2[1] = "Hello";
  arr2[2] = true;

  console.log(arr2); // [ 100, 'Hello', true ]
  // JS 배열의 특징 : 서로 다른 자료형의 데이터도 함께 저장 가능

  // 길이 제한이 없다 >> 값을 원하는 만큼 추가 가능
  arr1[0] = "가";
  arr1[1] = "나";
  arr1[2] = "다";
  arr1[4] = "마"; // 인덱스 3은 건너뜀
  console.log(arr1); // [ '가', '나', '다', <1 empty item>, '마' ]
  // 원하는 index에 값을 마음대로 추가할 수 있다.
  // >> 중간에 건너뛴 index는 빈칸으로 채워짐
}

// 배열과 for문
function check2() {
  // 일반 for문을 이용해서 배열요소 초기화
  const arr = [];

  for (let i = 0; i <= 3; i++) {
    arr[i] = i * 10;
  }

  console.log(arr); // [ 0, 10, 20, 30 ]

  // for.. of문을 사용하여 요소에 접근하기

  for (const value of arr) {
    console.log(value);
  }

  // forEach 문 사용하여 요소에 접근하기
  arr.forEach((value, index) => {
    console.log(index + " : " + value);
  });
}
