import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function PageOne() {
  return (
    <div>
      <h2>Page 1</h2>
      <p>Simple content for testing.</p>

      <p>
        Go to: <Link to="/">Home</Link> | <Link to="/page-2">Page 2</Link>
      </p>

      <Helmet>
        <script type="text/javascript">{`
          window.CPRUMDataLayer = window.CPRUMDataLayer || [];
          function cpRumTag() {
            window.CPRUMDataLayer.push(arguments);
          }

          cpRumTag('pageGroup', 'home');
          cpRumTag('appError', 10, 'undefined error');
          cpRumTag('conversion', 20, 1200);
          cpRumTag('variation', 'variation');
          cpRumTag('usePageHide', false);
        `}</script>
      </Helmet>
    </div>
  );
}
