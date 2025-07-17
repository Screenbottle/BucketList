
const loginForm = document.querySelector("form") as HTMLFormElement;
const userNameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const togglePasswordButton = document.getElementById("toggle-password") as HTMLButtonElement;
const usernameErrorMessage = document.getElementById("username-error-message") as HTMLParagraphElement;
const passwordErrorMessage = document.getElementById("password-error-message") as HTMLParagraphElement;

//Hanterar login
function handleLoginSubmit(event: Event): void {
    event.preventDefault();

    //kontrollerar att användarnamnet inte är tomt och att lösenordet är minst 4 tecken
    usernameErrorMessage.style.display = "none";
    passwordErrorMessage.style.display = "none";
    if (userNameInput.value.trim().length === 0) {
        usernameErrorMessage.style.display = "block";
        return
    }
    
    if (passwordInput.value.trim().length < 4) {
        passwordErrorMessage.style.display = "block";
        return;
    }


    const username = userNameInput.value.trim();
    const password = passwordInput.value.trim();

    const user = {
        username,
        password
    };

    localStorage.setItem("currentUser", JSON.stringify(user));
    
    //omdirigerar till dashboard
    window.location.href = "dashboard.html";
}

loginForm.addEventListener("submit", handleLoginSubmit);

//Hanterar gömma/visa lösenord

function handleTogglePassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    }
    else {
        passwordInput.type = "password";
    }
}

togglePasswordButton.addEventListener("click", handleTogglePassword);