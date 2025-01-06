import { Route, Routes } from "react-router-dom";
import { SinglePage } from "./pages/sp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SinglePage />} />
      </Routes>
    </>
  );
}

export default App;
