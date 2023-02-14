// import birdData from "./data/birds";
// import bonusItems from "./data/bonusItems";
import About from "./components/About";

import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import "./index.css";
import BirdGallery from "./components/BirdGallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <BirdGallery />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
