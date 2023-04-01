import { Route, Routes } from "react-router-dom";
import GDPR from "./pages/GDPR";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offer" element={<GDPR />}></Route>
        <Route path="/issue-report" element={<GDPR />}></Route>
        <Route path="/gdpr" element={<GDPR />}></Route>
        <Route path="/cookies" element={<GDPR />}></Route>
        <Route path="/career" element={<GDPR />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
