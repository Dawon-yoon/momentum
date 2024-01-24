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
}
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "✖";
  button.addEventListener("click", deleteToDO);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoListSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}
toDoForm.addEventListener("submit", handleTodoListSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
