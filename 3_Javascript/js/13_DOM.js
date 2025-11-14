// Node 확인하기
document.querySelector("#btn1").addEventListener("click", () => {
  
  const ul = document.querySelector("#test");

  // ul의 모든 자식노드 얻어오기
  // 요소.childNodes >> 배열 형태로 반환
  const list = ul.childNodes;
  console.log(list);
  // text(개행/공백), comment(주석), 태그(요소)
  // 모두 Node로써 취급된다

  // 자식 노드 중 첫번째 li 요소
  console.log(list[3]);

  // 1. 부모 노드 찾기(요소.parentNode)
  // #li1 부모 노드를 찾아서 배경 색 변경
  list[3].parentNode.style.backgroundColor = "skyblue";

  // 2. 첫번째 자식 노드 찾기(요소.firstChild)
  console.log(ul.firstChild);

  // 3. 마지막 자식 노드 찾기(요소.lastChild)
  console.log(ul.lastChild);

  // 4. 원하는 위치(index)에 존재하는 자식 노드 찾기
  // (요소.childNodes[index])
  // ul의 자식 노드 중 3번째 li 태그를 찾아서 배경색 핑크로 변경
  ul.childNodes[9].style.backgroundColor = "pink";

  // 5. 이전/다음 형제 노드 찾기
  // 요소.previousSibling >> 이전 노드 찾기
  // 요소.nextSibling >> 다음 노드 찾기
  // (참고) 탐색용 코드는 연달아서 작성할 수 있다
  
  // ul.childNodes[9]의 다음 다음 형제노드 선택
  // == ul.childNodes[11]
  console.log(ul.childNodes[9].nextSibling.nextSibling);

  // ul의 마지막 자식 노드의 이전 형제 노드 선택
  console.log(ul.lastChild.previousSibling);

  // 노드 추가
  
  // 1. 마지막 자식 노드로 추가 ( 요소.appendChild(노드) )
  
  // list[11]의 마지막 자식으로 "ZZZ"라는 TextNode 추가
  list[11].appendChild(document.createTextNode("ZZZ"));
  // >> 4번 ZZZ

  // 2. 마지막 자식으로 추가 (요소.append("내용" or 노드))
  list[11].append("1234", "abcd", "가나다라");
  // >> 4번 ZZZ1234abcd가나다라
  // appendChild / append 둘 다 DOM 요소 내부에 자식 노드를 추가하는 함수
  // - appendChild >> 노드만 추가 가능(createTextNode() 필수 작성)
  //                  한 번에 한 개씩만 추가할 수 있다.
  // - append : 노드 + 문자열 모두 가능 / 한 번에 여러 개 추가 가능하다.

  // 3. 첫 번째 자식으로 추가 (요소.prepend("내용" or 노드))
  list[11].prepend("오늘", "저녁", "고기먹어야지");
  // >> 오늘저녁고기먹어야지 4번 ZZZ...

  // 4. 이전/다음 형제로 추가 (요소.before("내용" or 노드) / 요소.after("내용" or 노드))
  ul.before("이전입니다", "ㅎㅎ");
  ul.after("이후입니다");
  // >> ul 태그 맨 앞, 맨 뒤에 각각 추가됨
});

document.querySelector("#btn2").addEventListener("click", () => {

  // #test2 얻어오기(ul)
  const ul = document.querySelector("#test2");

  // ul의 모든 자식요소 얻어오기
  console.log(ul.children);

  // ul의 첫 번째 자식 요소
  console.log(ul.firstElementChild);

  // ul의 마지막 자식 요소
  console.log(ul.lastElementChild);

  // ul의 부모 요소
  console.log(ul.parentElement);
  // >> body 태그

  // ul의 이전 형제 요소
  console.log(ul.previousElementSibling);
  // pre 태그

  // ul의 다음 형제 요소
  console.log(ul.nextElementSibling);
  // >> btn2 확인하기 버튼 태그
});