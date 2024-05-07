import Topnavbar from "./components/navbar/Topnavbar";
import Navbar from './components/navbar/Navbar.jsx'
import Hero from "./components/hero/Hero";
import Maincontent from "./components/main-content";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Topnavbar />
      <Navbar />
      <Hero />
      <Maincontent />
      <Footer />
    </>
  );
}

export default App;
