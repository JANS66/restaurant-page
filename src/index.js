import "./styles.css";
import { createHomePage } from "./initial-page-load.js";
import { createMenuPage } from "./menu.js";
import { createAboutPage } from "./about.js";

const contentArea = document.querySelector("#content");
const navButtons = document.querySelectorAll("nav button");

const routes = {
    "Home": createHomePage,
    "Menu": createMenuPage,
    "About": createAboutPage
};

function renderTab(tabName) {
    contentArea.innerHTML = "";

    if (routes[tabName]) {
        const pageElement = routes[tabName]();
        contentArea.appendChild(pageElement);
    }

    navButtons.forEach(btn => {
        const isSelected = btn.textContent === tabName;
        btn.setAttribute("aria-selected", isSelected);
        btn.classList.toggle("active", isSelected);
    });
}

document.querySelector("nav").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        renderTab(e.target.textContent);
    }
});

renderTab("Home");