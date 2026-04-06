import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import "./App.css";

function App() {
  return (
    <>

      {/* Header */}
      <header className="header">
        <h2>Project Manager App</h2>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </nav>

      {/* Routes */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>

    </>
  );
}

export default App;