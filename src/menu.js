export function createMenuPage() {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Our Menu";

    const list = document.createElement("ul");
    const items = ["Golden Pancakes - €12", "Spatula Burger - €15", "Chef's Special Pasta - €18"];

    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });

    content.appendChild(title);
    content.appendChild(list);
}