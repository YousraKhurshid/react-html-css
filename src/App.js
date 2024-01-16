import './App.css';
import Navbar from './components/common/Navbar';
import Home from './components/common/Home';
import About from './components/common/About';
import Contact from './components/common/Contact';
import Services from './components/common/Services';
import Footer from './components/common/Footer.jsx'

const App = () => {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Services />
        <About />
        <Contact />
        <Footer/>

      </div>
    </>
  );
};

export default App;
