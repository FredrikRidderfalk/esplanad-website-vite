import { Route, Routes } from "react-router-dom";
import GDPR from "./pages/GDPR";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/gdpr" element={<GDPR />}></Route>
    </Routes>
  );
}

export default App;
