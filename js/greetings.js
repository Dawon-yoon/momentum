const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  //1.화면 새로고침 방지
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //form 숨겨준다
  const username = loginInput.value;
  //value를 username이라는 key 값으로 저장
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  //username값을 username이라는 key와 함께 local storage에 저장
  paintGreetings(username);
  //onLoginSubmit함수에서는 유저 정보가 input으로 부터 오고있다
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
//비어있는 h1안에 'hello username'텍스트 추가

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
//앱이 시작되면 local storage에서 savedusename을 얻으려고 할텐데 거기서 username이라는 key를 가지고 찾게된다.

//시작은 key랑 value 값이 null이름로
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  //form class name hidden을 지우고
  loginForm.addEventListener("submit", onLoginSubmit);
  //form이 submit 될때만 onLoginSubmit 함수 실행
} else {
  paintGreetings(savedUsername);
  //paintGreetings함수 실행
}
