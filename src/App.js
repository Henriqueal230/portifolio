import './App.css';
import Home from './home/home';
import Sobre from './sobre/sobre';
import Habilidades from './habilidades/habilidades';
import Projetos from './projetos/projetos';


function App() {
  return (
    <div className="App">
      <Home name='Henrique' img='/me.png'/>
      <Sobre img='/me.png'/>
      <Habilidades />
      <Projetos />
    </div>
  );
}

export default App;
