import { createHomePage } from "./initial-page-load.js";
import { createMenuPage } from "./menu.js";
import { createAboutPage } from "./about.js";

function clearContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}

createHomePage();

const navButtons = document.querySelectorAll("nav button");

navButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        clearContent();
        const tabName = e.target.textContent;

        if (tabName === "Home") {
            createHomePage();
        } else if (tabName === "Menu") {
            createMenuPage();
        } else if (tabName === "About") {
            createAboutPage();
        }
    });
});