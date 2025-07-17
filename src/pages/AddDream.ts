import { User } from "../models/User.js";
import { checkLoggedIn } from "../utils/Auth.js";
import { Dream } from "../models/Dream.js";
import { getDreams, getUserName, saveDreams } from "../utils/Storage.js";
import { themes } from "../models/Dream.js";

const usernameDisplay = document.getElementById("user-name") as HTMLSpanElement;
const dreamInput = document.getElementById("dream") as HTMLInputElement;
const themeSelect = document.getElementById("dream-select") as HTMLSelectElement;
const addDreamButton = document.querySelector("button") as HTMLButtonElement;
const dreamErrorMessage = document.getElementById("dream-error-message") as HTMLParagraphElement;
const themeErrorMessage = document.getElementById("theme-error-message") as HTMLParagraphElement;

// sätter lystnare för att kalla funktioner för kontroll av inloggning och visning av användarens namn
document.addEventListener("DOMContentLoaded", () => {
    checkLoggedIn();
    setUsernameDisplay();
    renderThemes();
})


function setUsernameDisplay() {
    usernameDisplay.textContent = getUserName();
}

addDreamButton.addEventListener("click", () => {
    dreamErrorMessage.style.display = "none";
    themeErrorMessage.style.display = "none";

    const dreamText = dreamInput.value.trim();
    const dreamTheme = themeSelect.value;
    if(dreamText.length === 0) {
        dreamErrorMessage.style.display = "block";
        return;
    }

    if(dreamTheme.length === 0) {
        themeErrorMessage.style.display = "block";
        return;
    }

    const currentDreams = getDreams();
    const newId = currentDreams.length > 0 ? Math.max(...currentDreams.map(d => d.id)) + 1 : 1;
    const theme = themes.filter(t => t.value === dreamTheme)[0];

    const dream: Dream = {
        id: newId,
        name: dreamText,
        theme: theme.label,
        checked: false
    }

    currentDreams.push(dream);
    saveDreams(currentDreams);

    dreamInput.value = "";
    themeSelect.value = "";

})

function renderThemes() {
    themes.forEach(theme => {
        const themeOption = document.createElement("option");
        themeOption.value = theme.value;
        themeOption.textContent = theme.label;
        themeSelect.appendChild(themeOption);
    })
}

function showSuccess() {
    
}