import { useEffect, useState } from "react";
import { ButtonBar } from "../components/navbar";
import { LandingPage } from "./landing";
import { AboutPage } from "./about";
import { InterestPage } from "./application";
import EventsPage from "./events";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

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

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <div className="flex flex-col">
      <div
        className={`fixed bottom-0 w-full ${showButtons ? `hidden` : `block`}`}
      >
        <div className="flex w-1/3 pb-12 mx-auto justify-center">
          <ButtonBar />
        </div>
      </div>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch()}>
            <LandingPage />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch()}>
            <AboutPage />
          </Animator>
        </ScrollPage>
        <EventsPage />
        <InterestPage />
      </ScrollContainer>
    </div>
  );
};
