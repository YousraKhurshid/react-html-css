import './App.css';
import Navbar from './components/common/Navbar';
import Home from './components/common/Home';
import About from './components/common/About';
import Portfolio from './components/common/Portfolio';
import Contact from './components/common/Contact';
import Services from './components/common/Services';
import BuyNow from './components/common/BuyNow';
import Footer from './components/common/Footer.jsx'

const App = () => {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <BuyNow />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <Footer/>

      </div>
    </>
  );
};

export default App;
