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
