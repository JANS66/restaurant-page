export function createMenuPage() {
    const container = document.createElement("section");
    container.classList.add("fade-in-content");

    const title = document.createElement("h1");
    title.textContent = "Our Menu";

    const grid = document.createElement("div");
    grid.className = "menu-grid";

    const items = [
        { name: "Golden Pancakes", price: "€12", desc: "Fluffy and bright." },
        { name: "Spatula Burger", price: "€15", desc: "Signature beef blend." }
    ];

    items.forEach(item => {
        const card = document.createElement("article");
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <span>${item.price}</span>
        `;
        grid.appendChild(card);
    });

    container.append(title, grid);
    return container;
}