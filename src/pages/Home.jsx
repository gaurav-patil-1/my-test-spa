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
