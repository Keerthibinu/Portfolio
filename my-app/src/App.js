import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Journey from "./components/Journey/journey";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;