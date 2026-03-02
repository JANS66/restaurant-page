export function createAboutPage() {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "About Us";

    const text = document.createElement("p");
    text.textContent = "Contact us at: 123456789 or visit us at Flavor Street 123."

    content.appendChild(title);
    content.appendChild(text);
}