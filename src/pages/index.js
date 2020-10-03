import { h } from "preact";
import { Helmet } from "react-helmet";

export default (props) => (
  <div>
    <Helmet>
      <link rel="stylesheet" href="/styles.css" />
    </Helmet>
    <code className="bg-gray-400">/me sips toast</code>
  </div>
);
