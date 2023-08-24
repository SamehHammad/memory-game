import "./App.css";
import { Route, Routes } from "react-router-dom";
import Levels from "./components/Home/Levels";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/similar-pics" } element={<Levels />} />
      </Routes>
    </>
  );
}

export default App;
