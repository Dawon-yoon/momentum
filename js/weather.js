//geolocation : 유저 위치 확인
const API_KEY = "69db7bc7048508ff565eedcba06dbe18";

function onGeoOk(position) {
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/${data.main.temp}°C`;
    });
}
//units=metric 으로 하면 온도가 섭씨로 표시
function onGeoError() {
  alert("can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//getCurrentPosition() 두개의 함수가 필요(성공,에러,[옵션:없어도됌])
