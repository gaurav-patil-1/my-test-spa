## 1) Create the React app (Vite)

```bash
npm create vite@latest my-test-spa -- --template react
cd my-test-spa
npm install
npm install react-router-dom
```

## 2) Make Vite work on GitHub Pages (important)

Edit `vite.config.js` to set `base: './':`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
});
```

This makes asset paths work correctly on GitHub Pages project sites.

## 3) Add 3 pages + navigation

Create this folder:

```
src/pages
```

### `src/main.jsx` (wrap app in HashRouter)

Replace with:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
```

### `src/App.jsx` (routes + nav)

Replace with:

```jsx
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PageOne from "./pages/PageOne.jsx";
import PageTwo from "./pages/PageTwo.jsx";

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  padding: "6px 10px",
  borderRadius: 6,
  border: "1px solid #ccc",
  background: isActive ? "#eee" : "transparent",
  color: "inherit",
});

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <h1>My Test SPA</h1>

      <nav style={{ display: "flex", gap: 12, marginBottom: 20 }}>
        <NavLink to="/" end style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/page-1" style={linkStyle}>
          Page 1
        </NavLink>
        <NavLink to="/page-2" style={linkStyle}>
          Page 2
        </NavLink>
      </nav>

      <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-1" element={<PageOne />} />
          <Route path="/page-2" element={<PageTwo />} />
        </Routes>
      </div>
    </div>
  );
}
```

### `src/pages/Home.jsx`

```jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is the home page.</p>

      <p>
        Go to: <Link to="/page-1">Page 1</Link> | <Link to="/page-2">Page 2</Link>
      </p>
    </div>
  );
}
```

### `src/pages/PageOne.jsx`

```jsx
import { Link } from "react-router-dom";

export default function PageOne() {
  return (
    <div>
      <h2>Page 1</h2>
      <p>Simple content for testing.</p>

      <p>
        Go to: <Link to="/">Home</Link> | <Link to="/page-2">Page 2</Link>
      </p>
    </div>
  );
}
```

### `src/pages/PageTwo.jsx`

```jsx
import { Link } from "react-router-dom";

export default function PageTwo() {
  return (
    <div>
      <h2>Page 2</h2>
      <p>Simple content for testing.</p>

      <p>
        Go to: <Link to="/">Home</Link> | <Link to="/page-1">Page 1</Link>
      </p>
    </div>
  );
}
```

### (Optional) `src/index.css` minimal

```css
body {
  margin: 0;
}
a {
  color: inherit;
}
```

## 4) Run locally

```bash
npm run dev
```

Open the local URL Vite prints.

## 5) Deploy to GitHub Pages (easy method)

### A) Install gh-pages

```bash
npm install --save-dev gh-pages
```

### B) Add a deploy script

Edit `package.json` and add a deploy script like this:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### C) Push code to GitHub

Create a GitHub repo (example: my-test-spa) and push:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```

### D) Deploy

```bash
npm run deploy
```

This publishes your build to a gh-pages branch.

### E) Enable GitHub Pages in repo settings

On GitHub:

Settings → Pages

Source: Deploy from a branch

Branch: gh-pages and folder / (root)

Save

Your site will be available at:

```
https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/
```