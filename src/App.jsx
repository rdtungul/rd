import "./App.css";
// react router dom
import About from "./assets/components/About";
import Footer from "./assets/components/Footer";
import Hero from "./assets/components/Hero";
import Message from "./assets/components/Message";
import Nav from "./assets/components/Nav";
import Portfolio from "./assets/components/Portfolio";
import Services from "./assets/components/Services";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Message />
      <Footer />
    </>
  );
}

export default App;
