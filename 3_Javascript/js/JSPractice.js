document.getElementById("applyButton").addEventListener("click", () => {
  // 1. 입력값 가져오기
  const width = document.getElementById('inputWidth').value;
  const height = document.getElementById('inputHeight').value;
  const backColor = document.getElementById('backgroundColor').value;
  const border = document.getElementById('borderStyle').value;
  const text = document.getElementById('inputText').value;
  const fontSize = document.getElementById('inputFontSize').value;
  const color = document.getElementById('inputColor').value;
  const alignX = document.querySelector('input[name="alignX"]:checked').value;
  const alignY = document.querySelector('input[name="alignY"]:checked').value;

  // 2. 새 요소 생성
  const newElement = document.createElement('div');

  // 3. 요소 스타일, 내용 적용
  newElement.style.display = 'flex';
  newElement.style.width = width + 'px';
  newElement.style.height = height + 'px';
  newElement.style.color = color;
  newElement.style.border = border;
  newElement.style.fontSize = fontSize + 'px';
  newElement.style.backgroundColor = backColor;
  newElement.innerText = text;
  newElement.style.justifyContent = alignX; 
  newElement.style.alignItems = alignY;

  // 결과 출력하기
  const output = document.getElementById('output');

  // 한 번 실행 뒤 다시 실행시키면 이미 있던 거 지우기
  output.appendChild(newElement);
});
