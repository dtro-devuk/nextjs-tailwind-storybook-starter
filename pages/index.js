import { useEffect, useState } from "react";
import { useGoogleFontLoader } from "../lib/font-hooks.js";
import Button from "../components/atoms/buttons/Button";
import LinkWithIcon from "../components/atoms/links/LinkWithIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icon = <FontAwesomeIcon icon={["fab", "github"]} size="1x" />;

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  if (isMounted) {
    useGoogleFontLoader();
  }

  useEffect(() => {
    setIsMounted(true); // Set to true when the component is mounted
  }, []);

  const handleOnClick = (e) => {
    e.preventDefault;
    alert("You clicked submit!");
  };

  return (
    <div className="items-center h-screen text-center text-white bg-gradient-to-br from-deep to-space">
      <h1
        role="heading"
        aria-level="3"
        className="p-3 font-sans font-bold text-center"
      >
        Welcome the Nextjs, Tailwind CSS, Storybook Starter Template!
      </h1>
      <h2
        role="heading"
        aria-level="3"
        className="p-3 italic font-bold text-center font-Grandstander-VariableFont"
      >
        Grandstander Font : 0 1 2 3 4 5 6 7 8 9
      </h2>
      <h2
        role="heading"
        aria-level="3"
        className="p-3 font-sans font-bold text-center"
      >
        Oswald Font : 0 1 2 3 4 5 6 7 8 9
      </h2>
      <h2
        role="heading"
        aria-level="3"
        className="p-3 font-serif font-bold text-center"
      >
        Merriweather Sans Font : 0 1 2 3 4 5 6 7 8 9
      </h2>
      <div className="flex flex-row items-center justify-center">
        <Button label="Secondary" variant="secondary" value="secondary" />
        <Button
          label="Primary"
          variant="primary"
          value="primary"
          onClick={handleOnClick}
        />
      </div>
      <LinkWithIcon
        icon={Icon}
        label="GitHub"
        url="https://www.github.com/dtro-devuk"
      />
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
    </div>
  );
};

export default Home;
