export function createAboutPage() {
    const section = document.createElement("section");
    section.classList.add("fade-in-content");
    section.setAttribute("aria-labelledby", "about-title");

    const title = document.createElement("h1");
    title.id = "about-title";
    title.textContent = "About Our Journey";

    const contentWrapper = document.createElement("div");
    contentWrapper.className = "about-grid";

    const bio = document.createElement("p");
    bio.textContent = "The Golden Spatula started as a small family dream. Today, it stands as a testament to the power of fresh ingredients and a welcoming atmosphere.";

    const contactInfo = document.createElement("address");
    contactInfo.innerHTML = `
        <h3>Contact Us</h3>
        <p>📍 123 Flavor Street, Culinary District</p>
        <p>📞 <a href="tel:+15551234567">(555) 123-4567</a></p>
        <p>✉️ <a href="mailto:hello@goldenspatula.com">hello@goldenspatula.com</a></p>
    `;

    contentWrapper.append(bio, contactInfo);
    section.append(title, contentWrapper);

    return section;
}