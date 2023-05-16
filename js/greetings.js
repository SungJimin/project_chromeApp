// selector
const modal = document.querySelector(".modal");
const view = document.querySelector(".container");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName"

function onLoginSubmit(event){
    event.preventDefault(); // form 기능 삭제
    modal.classList.add(HIDDEN_CLASSNAME);
    view.classList.remove(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    // 저장 localStorage.setItem 불러오기 localStorage.getItem 삭제 localStorage.removeItem
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function paintGreetings(userName){
    greeting.innerText = `Hello, ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    // show the form
    // loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    modal.classList.remove(HIDDEN_CLASSNAME)

}else{
    // show the greeting
    paintGreetings(savedUserName);
    modal.classList.add(HIDDEN_CLASSNAME);
    view.classList.remove(HIDDEN_CLASSNAME);
}
