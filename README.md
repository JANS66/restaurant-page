# 🥇 The Golden Spatula

A modern, responsive Single Page Application (SPA) for a premium restaurant. This project demonstrates modular JavaScript architecture, Webpack bundling, and high-performance CSS extraction to provide a seamless tabbed browsing experience without page reloads.

---

## ✨ Features

- **Modular Architecture** — Each page (Home, Menu, About) is a separate JavaScript module for better maintainability.
- **Tabbed Navigation** — Dynamic content switching using a centralized State Manager in `index.js`.
- **Performance Optimized** — Uses `MiniCssExtractPlugin` to prevent Flash of Unstyled Content (FOUC) and `DocumentFragments` for memory-efficient DOM manipulation.
- **Responsive Design** — Mobile-first CSS Grid and Flexbox layouts that work on phones, tablets, and desktops.
- **Premium Dark Theme** — High-contrast, accessible design with smooth fade-in transitions.
- **SEO & Accessibility** — Semantic HTML5 tags and ARIA attributes throughout.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Vanilla JavaScript (ES6+) | Application logic |
| Webpack 5 | Module bundling |
| CSS3 (Custom Properties & Grid) | Styling and layout |
| HTML5 (Semantic Templates) | Markup structure |

---

## 📋 Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

---

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JANS66/restaurant-page
   ```

2. **Navigate to the project folder**
   ```bash
   cd restaurant-page
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

---

## 💻 Development

To run the project locally with live-reloading:

```bash
npm run start
```

The site will open automatically at [http://localhost:8080](http://localhost:8080).

---

## 📦 Production Build

To bundle the project for production:

```bash
npm run build
```

The production-ready files will be generated in the `/dist` folder.

---

## 📁 Project Structure

```
├── src/
│   ├── index.js               # Main entry point and tab logic
│   ├── initial-page-load.js   # Home tab module
│   ├── menu.js                # Menu tab module
│   ├── about.js               # About/Contact tab module
│   ├── styles.css             # Global and responsive styles
│   └── template.html          # HTML skeleton for Webpack
├── dist/                      # Generated production files
├── webpack.config.js          # Webpack configuration
└── package.json               # Project dependencies and scripts
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).