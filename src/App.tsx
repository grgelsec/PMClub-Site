import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { LandingPage } from "./pages/landing";
import { AboutPage } from "./pages/about";
import { EventsPage } from "./pages/events";
import { TeamPage } from "./pages/Team";
import { JoinPage } from "./pages/join";

function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navigation />
      <main id="main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
