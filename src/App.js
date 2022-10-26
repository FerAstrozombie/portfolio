import './App.css';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
import FormularioContacto from './Components/FormularioContacto/FormularioContacto';
import Inicio from './Components/Inicio/Inicio';
import NavBar from './Components/NavBar/NavBar';
import Proyectos from './Components/Proyectos/Proyectos';
import Slider from "./Components/Slider/Slider";

const screen = window.screen.width
function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      {screen < 700 ? <Card /> : <Slider/>} 
      <Proyectos />
      <FormularioContacto />
      <Footer />      
    </div>
  );
}

export default App;
