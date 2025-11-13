// 1번
function greeting(name) {
  console.log(`1. Hello, ${name}!`)
}

greeting("전재민");


// 2번
function sum(a, b) {
  return a + b;
}
const result = sum(10, 5);
console.log(`2. 두 숫자의 합 : ${result}`);

// 3번
const multiply = (num1, num2) => num1 * num2;
const multiplyResult = multiply(10, 5);
console.log(`3. 두 숫자의 곱 : ${multiplyResult}`);

// 4번
function compareNumbers(num1, num2) {
  if(num1 > num2) console.log(`${num1}`);
  else console.log(`${num2}`);
}

compareNumbers(10, 5);
compareNumbers(4, 23);

// 5번
function stringLength(str) {
  console.log(`문자열의 길이 : ${str.length}`);
}

stringLength("안녕하세요반가워요");

// 6번
function repeatString(str, rep){
  let result = "";

  for(let i = 0; i < rep; i++) {
    result += str;
  }

  console.log(`반복 결과 : ${result}`);
}
repeatString("집가고싶다", 5);

// 7번
function isEven(num) {
  return num % 2 === 0;
}

const even1 = isEven(4);
const even2 = isEven(9);
console.log(`${even1}, ${even2}`);

// 8번
function maxNum(a, b, c) {
  return Math.max(a, b, c);
}

const max = maxNum(10, 5, 2);
console.log(`${max}`);

// 9번
const getFirst = (arr) => arr[0];

const array1 = [10, 20, 30];
const firstElement = getFirst(array1);
console.log(`${firstElement}`);

// 10번
function calc(arr) {
  if(arr.length === 0) {
    return { sum : 0, avg : 0};
  }
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const avg = sum / arr.length;
  return { sum, avg };

}

const array2 = [10, 20, 30];
const res = calc(array2);
console.log(res);

// 11번
function calc2(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        return "오류: 0으로 나눌 수 없음";
      }
      result = num1 / num2;
      break;
    default:
      return "오류: 알 수 없는 연산자";
    }
    return result;
}
const res2 = calc2(10, 5, '+');
console.log(`${res2}`);

// 12번
function executeGreeting(name, greetFunction) {
    greetFunction(name);
}

const sayHi = (name) => {
    console.log(`${name}님, 안녕하세요!`);
};

executeGreeting("전재민", sayHi);



