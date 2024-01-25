//geolocation : 유저 위치 확인
function onGeoOk(position) {
  const lat = position.coords.latitude; //위도
  const lng = position.coords.longitude; //경도
  console.log("you live in ", lat, lng);
}

function onGeoError() {
  alert("can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//getCurrentPosition() 두개의 함수가 필요(성공,에러,[옵션:없어도됌])
