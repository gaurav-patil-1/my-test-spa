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
