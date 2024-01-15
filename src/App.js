import './App.css';
import Navbar from './components/common/Navbar';
import Home from './components/common/Home';
import About from './components/common/About';
import Contact from './components/common/Contact';
import ServicesPage from './components/common/ServicesPage';
import Footer from './components/common/Footer.jsx'

const App = () => {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <ServicesPage />
        <About />
        <Contact />
        <Footer/>

      </div>
    </>
  );
};

export default App;
