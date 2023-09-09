import { Route, Routes } from "react-router-dom";
import Coding from "./Coding";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coding" element={<Coding />} />
      </Routes>
    </div>
  );
}
