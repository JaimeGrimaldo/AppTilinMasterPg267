import React from "react";
import estilo from "./Fase1.module.css";
const Fase1: React.FC = () => {

  
  return (
    <div className={estilo.contenedor}>
      <div>
        <input type="text" placeholder="Titulo" className={estilo.input} />
      </div>
      <div>
        <h3 className={estilo.tituloDesc}>Descripción</h3>
        <textarea placeholder="Escribe una breve descripción de la encuesta"></textarea>
      </div>
    </div>
  );
};

export default Fase1;
