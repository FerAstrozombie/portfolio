import Card from './Components/Card/Card';
import Chat  from './Components/Chat/Chat.tsx';
import Cursos from './Components/Cursos/Cursos';
import Footer from './Components/Footer/Footer';
import FormularioContacto from './Components/FormularioContacto/FormularioContacto';
import Inicio from './Components/Inicio/Inicio';
import NavBar from './Components/NavBar/NavBar';
import Proyectos from './Components/Proyectos/Proyectos';
import Slider from "./Components/Slider/Slider";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      {screen < 700 ? <Card /> : <Slider/>}
      <Cursos />
      <Proyectos />
      <FormularioContacto />
      <Chat />
      <Footer />      
    </div>
  )
}

export default App
