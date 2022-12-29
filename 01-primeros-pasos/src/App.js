import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerCompononte } from './TercerCompononte';
import { EventosComponente } from './EventosComponente';

function App() {

const ficha_medica={
  altura:"1.76cm",
  grupo:"H+",
  estado:"Bueno",
  alergias:"Ninguna"

}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en react!!!
        </p>
        <div className='componentes'>
        <hr/>
        <TercerCompononte
        nombre="Cristian"
        apellido="Cuevas"
        ficha={ficha_medica}
        />
        <hr/>
        <EventosComponente/>
        <hr/>
        <hr/>
        <SegundoComponente/>
        <hr/>
        <MiComponente/>
        </div>
        </header>

    </div>
  );
}

export default App;
