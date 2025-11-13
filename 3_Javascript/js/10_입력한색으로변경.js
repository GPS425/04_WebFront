// 입력한 색으로 박스의 색상 변경하기
const button = document.querySelector('#changeButton');

// 두 배열의 요소의 갯수, 순서가 같으니 index 번호를 공유할 수 있음
const boxList = document.querySelectorAll('.box');
const colorInput = document.querySelectorAll('.color-input');

button.addEventListener('click', function() {
  for (let i = 0; i < colorInput.length; i++) {
    boxList[i].style.backgroundColor = colorInput[i].value;
    // boxList[0].style.backgroundColor = colorInput[0].value;
    // boxList[1].style.backgroundColor = colorInput[1].value;
    // boxList[2].style.backgroundColor = colorInput[2].value;
    // boxList[3].style.backgroundColor = colorInput[3].value;
    // boxList[4].style.backgroundColor = colorInput[4].value;
  }
});

