const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//array 만들기
//localstorage에는 텍스트만 저장가능 array(배열)는 저장못해->json.stringify를 이용해 배열 형.태로 저장
//form submit event 막기 event.preventDefault();
function deleteToDO(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //X를 클릭한 리스트를 필터링
  //필터링 하기 위해 li.id를 string에서 넘버로 바꿈(parseInt)
  saveToDos();
}
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✔";
  button.addEventListener("click", deleteToDO);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoListSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleTodoListSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

//랜덤 아이디 만들어서 todos어레이에게 주기=obj으로 만들기
//어레이에서 obj지우기(지우는게 아니라 filter로 걸러서 새 어레이로 바꾸기)
//filter 함수 만들기. true가 아니면 걸러버려~(true 리턴 시키기) true가 아닌 걸 거른 새 어레이 만드는 것임.
