import { User } from "../models/User.js";
import { checkLoggedIn } from "../utils/Auth.js";
import { Dream } from "../models/Dream.js";
import { getDreams, getUserName, saveDreams } from "../utils/Storage.js";

const usernameDisplay = document.getElementById("user-name") as HTMLSpanElement;
const dreamList = document.querySelector(".dream-list") as HTMLUListElement;

// sätter lystnare för att kalla funktioner för kontroll av inloggning, visning av användarens namn, hämtning av drömlistan samt 
document.addEventListener("DOMContentLoaded", () => {
    checkLoggedIn();
    setUsernameDisplay();
    const dreams = getDreams();
    populateDreamList(dreams);
})

function setUsernameDisplay() {
    usernameDisplay.textContent = getUserName();
}

function createDreamListItem(dream: Dream): HTMLLIElement {
    const dreamListItem = document.createElement("li");
    dreamListItem.className = "dream-list_item";
    dreamListItem.dataset.id = dream.id.toString();

    // gå från vänster till höger, checkbox först
    const dreamCheck = document.createElement("input");
    dreamCheck.className = "dream-check";
    dreamCheck.type = "checkbox";
    dreamCheck.id = `dream-check-${dream.id}`;
    dreamCheck.checked = dream.checked;
    dreamCheck.addEventListener("click", () => updateDream(dream));

    // sedan label
    const dreamLabel = document.createElement("label");
    dreamLabel.innerHTML = `${dream.name}, <span class="dream-theme">${dream.theme}</span>`;
    dreamLabel.htmlFor = dreamCheck.id;

    // ta-bort knapp
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerHTML = `<img src="../assets/images/trash_delete.png">`;
    deleteButton.addEventListener("click", () => deleteDream(dream));

    dreamListItem.append(dreamCheck, dreamLabel, deleteButton);
    return dreamListItem;
}

function populateDreamList(dreams: Dream[]) {
    while(dreamList.firstChild) {
        dreamList.removeChild(dreamList.firstChild);
    }
    dreams.forEach(dream => {
        const listItem = createDreamListItem(dream);
        dreamList.appendChild(listItem);
    })

}

// använder splice för att ta bort drömmen
function deleteDream(dream: Dream) {
    const dreams = getDreams();
    const index = dreams.indexOf(dream);

    dreams.splice(index, 1);
    saveDreams(dreams);

    populateDreamList(dreams);
}


// hämta lista från local storage, hitta index för drömmen som ska uppdateras, uppdatera listan
function updateDream(dream: Dream) {
    const dreams = getDreams();
    const index = dreams.indexOf(dream);
    dreams[index].checked = !dreams[index].checked;

    saveDreams(dreams);

    populateDreamList(dreams);
}

