// B-01. 위도, 경도, API key 등 이 삽입된 URL 불러오기
// B-02. API_KEY 입력을 위한 변수 정의
const API_KEY = "cc2e71a23d70fc0b6ecc3d87e0ecf7fd";


// A-00. navigator.geolocation.getCurrentPosition을 활용하여 위치 좌표 구하기
//A-01. success(잘 됐을 때 실행 되는 함수)
// 01) success함수는 geolocationPosition object 하나를 입력 받는다.
function onGeoOk(position) {
    // 02) latitude : 위도 좌표 구하기
    const lat = position.coords.latitude;
    // 03) longitude : 경도 좌표 구하기
    const lon = position.coords.longitude;

    // B-02. API_KEY, 위도, 경도 값 입력을 위한 url 변수 정의
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    // console.log(url)

    // B-03. fetch를 사용하여 url응답 얻어오기(개발자모드 Network에서 확인 가능)
    // fetch(url);
    // B-04. url응답을 통해 얻은 정보 사용하기
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weatherContainer #city");
            // const weather = document.querySelector("#weatherContainer #weather");
            const temp = document.querySelector("#weatherContainer #temp");
            const weatherIcon = document.getElementById("weatherIcon");
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            const tempCalc = data.main.temp - 273;
            weatherIcon.setAttribute('src', iconUrl);
            // weather.innerText = data.weather[0].main;
            temp.innerText = tempCalc.toFixed(1) + "℃";
            city.innerText = data.name;
        });
}
//A-02. error(에러 발생 했을 때 실행 되는 함수)
function onGeoError() {
    console.log("can't find you. no weather for you :< ")
}
// navigator.geolocation.getCurrentPosition(success , error)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// javascript가 getCurrentPosition의 success, error 함수를 불러 object를 전달해준다.


// B-00. API계정 연결하기
// * API란? 다른 서버의 데이터와 연결할 수 있는 방법
// 1) openweathermap.org 웹사이트 접속
// 2) Current Weather Data의 "API doc" 클릭
// 3) By geographic coordinates의 "API call" 코드 복사
// 4) api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} 코드 중 {}에 해당하는 내용 넣어 접속하기.
// https://api.openweathermap.org/data/2.5/weather?lat=37.5160832&lon=127.05792&appid=cc2e71a23d70fc0b6ecc3d87e0ecf7fd
