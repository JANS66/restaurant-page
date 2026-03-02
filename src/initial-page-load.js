export function createHomePage() {
    const section = document.createElement("section");
    section.classList.add("fade-in-content");
    section.setAttribute("aria-labelledby", "home-title");

    const headline = document.createElement("h1");
    headline.id = "home-title";
    headline.textContent = "The Golden Spatula";

    const imageContainer = document.createElement("div");
    imageContainer.className = "hero-image-wrapper";

    const image = document.createElement("img");
    image.src = "https://images.unsplash.com/photo-1765099271664-614c541196ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    image.alt = "Cozy restaurant interior";
    image.setAttribute("loading", "eager");
    imageContainer.appendChild(image);

    const description = document.createElement("p");
    description.className = "load-text";
    description.textContent = "Where every bite tells a story of flavor and tradition. Founded in 1998, we bring farm-to-table excellence to your neighborhood.";

    section.append(headline, imageContainer, description);

    return section;
}