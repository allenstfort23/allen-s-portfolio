import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import ContactMe from "./pages/ContactMe/ContactMe.tsx";
import Home from "./pages/Home/home.tsx";
import About from "./pages/About/About.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
