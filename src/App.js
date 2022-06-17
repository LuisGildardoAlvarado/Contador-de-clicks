import './App.css';
import TDLogo from './images/TD.jpg';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo'
        src={TDLogo}
        alt='Logo'/>
      </div>

      <div className='contador-principal'>
        <Contador
        numClics={numClics}/>
      </div>

      <div className='contenedor-principal'>
        <Boton 
          texto="Sumar Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />

        <Boton 
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
