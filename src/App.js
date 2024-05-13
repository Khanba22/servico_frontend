import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Info from './Components/Info';
import Navbar from './Components/Navbar';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Info/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/> 
    </div>
  );
}

export default App;
