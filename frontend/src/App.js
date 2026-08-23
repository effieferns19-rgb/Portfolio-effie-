import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedWork from "./components/FeaturedWork";
import Timeline from "./components/Timeline";
import LifeGallery from "./components/LifeGallery";
import Contact from "./components/Contact";

const Landing = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <FeaturedWork />
    <Timeline />
    <LifeGallery />
    <Contact />
  </>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
