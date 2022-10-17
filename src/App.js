import './App.css';
import Footer from './Components/Footer/Footer';
import Inicio from './Components/Inicio/Inicio';
import NavBar from './Components/NavBar/NavBar';
import Proyectos from './Components/Proyectos/Proyectos';
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <Slider />
      <Proyectos />
      <Footer />      
    </div>
  );
}

export default App;
