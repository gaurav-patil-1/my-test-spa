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
