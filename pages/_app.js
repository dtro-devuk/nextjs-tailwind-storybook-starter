import PropTypes from "prop-types";

import "../styles/global.css";

/**
 * Import and create FA Icons Library
 */
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faGitSquare,
  faGithub,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
/* Tell Font Awesome to skip adding the CSS automatically since it's being imported above */
config.autoAddCss = false;

library.add(fas, faGitSquare, faGitSquare, faGithub, faGithubAlt);

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};
