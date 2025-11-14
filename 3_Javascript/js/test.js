// 등록될 텍스트의 크기와 색상을 전역적으로 저장하는 변수.
// 초기값으로 16px, 검은색을 설정해 둠.
let currentSize = '16px';
let currentColor = 'black';

// 1. '적용' 버튼 (applyButton) 클릭 이벤트 리스너 설정
document.getElementById('applyButton').addEventListener('click', () => {
  // '크기' 입력 필드의 값 (숫자)과 '색상' 입력 필드의 값을 가져옴.
  const sizeValue = document.getElementById('sizeInput').value;
  const colorValue = document.getElementById('colorInput').value;

  // 전역 변수 currentSize와 currentColor를 입력받은 값으로 업데이트.
  // 크기는 'px' 단위를 붙여 CSS 형식으로 저장.
  currentSize = sizeValue + 'px';
  currentColor = colorValue;

  // 텍스트를 실제로 입력할 displayArea (textarea) 요소를 가져옴.
  const displayArea = document.getElementById('displayArea');
  // displayArea의 폰트 크기와 색상을 현재 저장된 스타일로 즉시 변경하여 
  // 사용자가 입력 시 미리보기가 가능하도록 함.
  displayArea.style.fontSize = currentSize;
  displayArea.style.color = currentColor;
});

// 2. '등록' 버튼 (submitButton) 클릭 이벤트 리스너 설정
document.getElementById('submitButton').addEventListener('click', () => {
  const displayArea = document.getElementById('displayArea');
  // displayArea의 값(사용자가 입력한 텍스트)을 가져오고, 앞뒤 공백을 제거함.
  const textToRegister = displayArea.value.trim();

  // 텍스트가 비어있으면 아무 동작 없이 함수 종료.
  if (textToRegister === '') {
    return;
  }

  // 등록할 텍스트를 담을 새로운 <div> 요소를 생성함.
  const newEntry = document.createElement('div');
  
  // 텍스트 내용 삽입: 입력된 텍스트 내의 줄 바꿈 문자(\n)를 HTML의 <br> 태그로 변환하여 적용.
  newEntry.textContent = textToRegister;
  
  // 저장되어 있던 currentSize와 currentColor 스타일을 새로운 <div>에 적용.
  newEntry.style.fontSize = currentSize;
  newEntry.style.color = currentColor;
  // 등록된 요소 간의 위아래 간격을 10px로 설정.
  newEntry.style.margin = '10px 0';
  
  // 등록 버튼 요소는 가져왔지만, 실제 삽입은 'registeredContent' 컨테이너에 한다.
  // (만약 HTML에 <div id="registeredContent"></div>가 있다면 이 코드가 정상 작동함)
  // 새로운 텍스트 요소를 'registeredContent' 컨테이너의 맨 뒤에 추가 (순서대로 등록됨).
  document.getElementById('registeredContent').appendChild(newEntry);

  // 등록 완료 후 텍스트 입력창(displayArea)을 비움.
  displayArea.value = '';
  // 텍스트 입력창의 스타일도 기본값으로 초기화하여, 다음 등록 시 새로운 스타일을 적용하도록 준비함.
  displayArea.style.fontSize = '16px'; 
  displayArea.style.color = 'black';
});