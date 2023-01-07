import React from 'react';
import Slides from './Carrousel';
import SmallExample from './Table';

const Home = () => {
  return (
    <>
      <div className="Slides">
        <Slides />
      </div>
      <div className="Home-Info">
        <h1>Horario de Misas</h1>
        <SmallExample />
      </div>
      <div className="Text">
        <h2>Servicios Religiosos</h2>
        <div className="Text-Container">
          <div className="Text-Info">
            <h3>Confesiones</h3>
            <p>Jueves y Viernes 18:00</p>
          </div>
          <div className="Text-Info">
            <h3>Bautisos</h3>
            <p>Sábado 18:30</p>
          </div>
          <div className="Text-Info">
            <h3>Adoración al Santísimo</h3>
            <p>Jueves 18:00</p>
          </div>
          <div className="Text-Info">
            <h3>Curso Pre-Bautismal</h3>
            <p>1er y 3er miércoles del mes 19:00</p>
          </div>
          <div className="Text-Info">
            <h3>Curso Pre-Matrimonial</h3>
            <p>2do domingo cada dos meses</p>
          </div>
        </div>
      </div>
    </>
  )
};
export default Home;