export function createHomePage() {
    const content = document.querySelector("#content");

    const headline = document.createElement("h1");
    headline.textContent = "The Golden Spatula";
    content.appendChild(headline);

    const image = document.createElement("img");
    image.src = "https://images.unsplash.com/photo-1765021095732-cd93cae5ec09?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fENvenklMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D";
    image.alt = "Cozy restaurant interior";
    image.style.maxWidth = "100%";
    content.appendChild(image);

    const description = document.createElement("p");
    description.textContent = "Where every bite tells a story of flavor and tradition. Founded in 1998, we bring farm-to-table excellence to your neighborhood.";
    content.appendChild(description);
}