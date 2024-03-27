import './App.css';
import About from './Components/About';
import Info from './Components/Info';
import Navbar from './Components/Navbar';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>

      <Info/>
      <Services/>
    </div>
  );
}

export default App;
