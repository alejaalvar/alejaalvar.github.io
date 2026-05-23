# Alejandro Alvarado — Personal Website

Personal portfolio site built for CS 463/563 – Intro to Web Development, Final Project.

**Live site:** https://alejaalvar.github.io/
**Repo:** https://github.com/alejaalvar/alejaalvar.github.io

## Project Structure

```
alejaalvar.github.io/
├── index.html       — single-page site with all sections
├── css/
│   └── style.css    — all custom styles; every color is a CSS variable
├── js/
│   └── main.js      — dark mode toggle with localStorage persistence
└── README.md
```

## Run Locally

Requires [Node.js](https://nodejs.org/) for npx.

```bash
npx browser-sync start --server --files "**/*"
```

Then open http://localhost:3000

Alternatively with Python:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## Outside Sources & Libraries

| Source | Purpose |
|---|---|
| [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/) | Navbar, grid layout, carousel component |
| [Bootstrap Icons 1.11](https://icons.getbootstrap.com/) | Moon/sun icons for dark mode toggle |
| [MDN — CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) | CSS variable syntax reference |
| [MDN — localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) | Persisting dark mode preference across visits |
