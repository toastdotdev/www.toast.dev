import { h } from "preact";
import { Helmet } from "react-helmet";

export default (props) => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Helmet>
      {props.children}
    </div>
  );
};
