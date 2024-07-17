import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './components/Header/Header';
//import ModalEditar from './components/ModalEditar/ModalEditar';
import NewVideo from './components/NewVideo/NewVideo'
import Footer from './components/Footer/Footer';
import BannerMain from './components/BannerMain/BannerMain';
import VideosGroup from './components/VideosGroup/VideosGroup';

function App() {
  const [mostrarFormulario, manejarMostrarFormulario] = useState(false);
  
  const mostrarNuevo = () => { 
    manejarMostrarFormulario(true)
  }

  const mostrarHome = () => {
    manejarMostrarFormulario(false)
  }
  
  const videosgroup = [
    {
      id: uuid(),
      titulo:"BACK END",
      colorPrimario:"#00c86f"
    },
    {
      id: uuid(),
      titulo:"FRONT END",
      colorPrimario:"#6bd1ff"
    },
    {
      id: uuid(),
      titulo:"INNOVACIÓN Y GESTIÓN",
      colorPrimario:"#ffba05"
    },
    ]

  return (
    <div>
      <Header mostrarNuevo={mostrarNuevo} mostrarHome={mostrarHome} />
      
      {mostrarFormulario ? <NewVideo /> :
        <>
          <BannerMain/>
          {videosgroup.map( (grupo) => {
          return <VideosGroup categoria={grupo.titulo}
          grupos={grupo} key={grupo.titulo}
          />
          
          })}
        </>
        
      }
      <Footer/>
    </div>
  );
}

export default App;
