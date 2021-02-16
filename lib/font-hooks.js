/**
 * A simple hook to Load self-hosted Google Fonts famalies
 *
 * We are use Font Face Observer npm package to load the
 *
 * Fonts need to be served from /public/static
 *
 * @see : https://github.com/bramstein/fontfaceobserver
 *
 */
const FontFaceObserver = require("fontfaceobserver");

export const useGoogleFontLoader = () => {
  const debug = process.env.NODE_ENV !== "production";

  const baseFontOne = !debug
    ? "/{sub-domain-goes-here}/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf"
    : "/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf";

  const baseFontTwo = !debug
    ? "/{sub-domain-goes-here}/static/fonts/google/oswald/Oswald-VariableFont_wght.ttf"
    : "/static/fonts/google/oswald/Oswald-VariableFont_wght.ttf";

  console.log(`Font Preload path ${baseFontOne}`);

  const linkOne = document.createElement("link");
  linkOne.href = baseFontOne;
  linkOne.rel = "preload";
  linkOne.as = "font";
  linkOne.type = "font/ttf";
  linkOne.crossOrigin = "anonymous";

  document.head.appendChild(linkOne);

  const linkTwo = document.createElement("link");
  linkTwo.href = baseFontTwo;
  linkTwo.rel = "preload";
  linkTwo.as = "font";
  linkTwo.type = "font/ttf";
  linkTwo.crossOrigin = "anonymous";

  document.head.appendChild(linkTwo);

  LoadTheFonts();
};

const LoadTheFonts = () => {
  var one = new FontFaceObserver("Grandstander Variable");
  var two = new FontFaceObserver("Oswald Variable");

  Promise.all([one.load(), two.load()])
    .then(() => {
      console.log("The critical fonts are have loaded");
    })
    .catch((err) => {
      console.warn("Some critical font are not available:", err);
    });
};
