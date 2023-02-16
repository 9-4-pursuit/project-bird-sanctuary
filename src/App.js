import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BirdGallery from "./components/BirdGallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./index.css";

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
