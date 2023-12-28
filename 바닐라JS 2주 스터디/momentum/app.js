const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

const link = document.querySelector("a");

function onLoginSubmit(tomato) {
    tomato.preventDefault();
    const username = loginInput.value;
   console.log(username);
}

function handleLinkClick() {
    event.preventDefault();
    //alert(clicked!);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);