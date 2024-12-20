import { Route, Routes } from "react-router-dom";
import { Greeting } from "./components/landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  );
}

export default App;
