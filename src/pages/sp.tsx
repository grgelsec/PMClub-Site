import { ButtonBar } from "../components/navbar";
import { LandingPage } from "./landing";
import { AboutPage } from "./about";
import { InterestPage } from "./application";
import EventsPage from "./events";

export const SinglePage = () => {
  return (
    <div className="flex flex-col z-50">
      <div className={`fixed bottom-0 w-full z-50`}>
        <div className="flex w-1/3 pb-12 mx-auto justify-center z-50">
          <ButtonBar />
        </div>
      </div>
      <LandingPage />
      <AboutPage />
      <EventsPage />
      <InterestPage />
    </div>
  );
};
