export function logOut(): void {
    window.location.replace('login.html');
};


export function checkLoggedIn() {
    const user = localStorage.getItem("currentUser");
    if (user) {
        return;
    }
    else {
        redirectToLogin();
    }
}

export function redirectToLogin() {
    window.location.replace('../pages/login.html');
}