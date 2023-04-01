import { Route, Routes } from "react-router-dom";
import GDPR from "./pages/GDPR";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Offer from "./pages/Offer";
import IssueReport from "./pages/IssueReport";
import Cookies from "./pages/Cookies";
import Career from "./pages/Career";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/issue-report" element={<IssueReport />}></Route>
        <Route path="/gdpr" element={<GDPR />}></Route>
        <Route path="/cookies" element={<Cookies />}></Route>
        <Route path="/career" element={<Career />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
