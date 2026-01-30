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

          cpRumTag('indicator', 'adsrendered', 2345);
          cpRumTag('pageGroup', 'home');
          cpRumTag('appError', 10, 'undefined error');
          cpRumTag('conversion', 20, 1200);
          cpRumTag('tracepoint', 'tracepoint', 'tracepoint mesg');
          cpRumTag('variation', 'variation');
          cpRumTag('usePageHide', false);
          cpRumTag('consentv2', { analytics_storage: 'denied' });
          cpRumTag('benchmarkLog', true);
        `}</script>
      </Helmet>
    </div>
  );
}
