import { useEffect, useState } from "react";
import { useGoogleFontLoader } from "../lib/font-hooks.js";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  //   const googleLicenseInfo = licenseInfo;

  if (isMounted) {
    useGoogleFontLoader();
  }

  useEffect(() => {
    setIsMounted(true); // Set to true when the component is mounted
  }, []);

  return (
    <div className="text-center">
      <h1
        role="heading"
        aria-level="3"
        className="font-sans p-3 text-2xl text-center text-blue-900 font-bold"
      >
        Welcome Initial Starter Template!
      </h1>
      <h3
        role="heading"
        aria-level="3"
        className="italic font-Grandstander-VariableFont p-3 text-center text-blue-900 font-bold"
      >
        Grandstander Fonts
      </h3>
      <h3
        role="heading"
        aria-level="3"
        className="font-sans p-3 text-center text-blue-900 font-bold"
      >
        Oswald Fonts
      </h3>
      <h3
        role="heading"
        aria-level="3"
        className="font-serif p-3 text-center text-blue-900 font-bold"
      >
        Merriweather Sans Fonts
      </h3>
    </div>
  );
};

export default Home;
