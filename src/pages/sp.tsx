import { useEffect, useRef, useState } from "react";
import { ButtonBar } from "../components/navbar";
import { LandingPage } from "./landing";
import { AboutPage } from "./about";

export const SinglePage = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      <div
        className={`fixed bottom-0 w-full ${showButtons ? `hidden` : `block`}`}
      >
        <div className="flex w-1/3 pb-12 mx-auto justify-center">
          <ButtonBar />
        </div>
      </div>

      <LandingPage />
      <AboutPage />
    </div>
  );
};
