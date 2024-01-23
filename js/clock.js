const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//.padStart(2,"0") string에 적용되는 속성.
//(2줄로 만들거임, 2줄아니면 앞에"0"을 붙여)
//setInterval(arguments1을 arguments2의 시간마다 호출) (arguments1(함수),arguments2(ms))

getClock(); //즉시 호출
setInterval(getClock, 1000); //일초마다 갱신
