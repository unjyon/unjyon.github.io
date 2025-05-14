import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Layout/Navigation";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import "./styles/variables.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
