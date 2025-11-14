const addBtn = document.querySelector('#add');
const sumBtn = document.querySelector('#calc');
const container = document.querySelector('.container');

addBtn.addEventListener("click", () => {

  const inputBox = document.createElement("div");
  inputBox.classList.add("row");

  const input = document.createElement("input");
  input.type = "number";
  // input.setAttribute("type", "number"); 가능하지만 위에 쓴 방법이 더 좋음

  const removeBtn = document.createElement("span");
  removeBtn.classList.add("remove-row");
  // <span class="remove-row"></span>

  removeBtn.innerHTML = "&times;";  // &times는 HTML에서만 읽어낼 수 있음
  // <span class="remove-row">&times</span>

  // 클릭된 x 버튼의 부모(input이 포함된 div)요소를 제거
  removeBtn.addEventListener("click", e => {
    // e : 이벤트가 발생했을 때 JS가 자동으로 만들어주는
    // 이벤트 객체를 받는 매개변수

    const curRow = e.target.closest('.row');
    // e.target : 이벤트객체 e가 가진 프로퍼티
    // >> 실제로 클릭이 발생한 요소 가리킴(X버튼)

    // 클릭된 X버튼(e.target)부터 DOM 트리의 부모 방향으로
    // 거슬러 올라가면서 가장 먼저 마주치는
    // .row 클래스를 가진 요소를 찾아냄

    /*
    removeBtn.addEventListener("click", e = > {

      // 현재 이벤트가 발생한 요소(클릭된 x 버튼)의 부모 요소를 탐색(선택)
      const parent = e.target.parentElement;  >> div.row

      // 부모 요소 제거하기
      parent.remove();
    });
    */

    curRow.remove();
    // 그걸 삭제함
  })

  input.classList.add('input-number');

  inputBox.append(input, removeBtn);
  // input과 removeBtn을 inputBox에 한 번에 추가하는 것
  container.append(inputBox);
  // 그걸 container에 다시 추가함
});


sumBtn.addEventListener("click", () => {

  const inputNumber = document.querySelectorAll('.input-number');

  let sum = 0;
  
  for(let i = 0; i < inputNumber.length; i++) {
    sum += Number(inputNumber[i].value);
  }

  alert(`합 : ${sum}`);
});