const clock = document.querySelector('h3#clock');

function getClock(){
    const date = new Date();
    // padStart(문자 길이 제한 maxlength, "추가할 문자")
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000); // 1000ms = 1s