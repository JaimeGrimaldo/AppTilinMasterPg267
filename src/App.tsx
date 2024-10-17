import React, { useState } from "react";
import estilos from "./App.module.css";
import Header from "./components/Header";
import Fase1 from "./components/Fase1";
import Fase2 from "./components/Fase2";
import { Botones } from "./components/Botones";
import { Button } from "@mui/material";
import { CiCirclePlus } from "react-icons/ci";

function App() {
  const [pregunta, setPregunta] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const limpiarCamposFase2 = () => {
    setPregunta("");
    setSelectedOption(null);
  };

  return (
    <>
      <div className={estilos.pagina}>
        <div className={estilos.primerParte}>
          <Header />
          <h1>Bienvenido</h1>
          <h2>¿Ya estás listo para crear tu encuesta?</h2>
        </div>

        <div className={estilos.contenedorMain}>
          <Fase1 />
          <Fase2
            pregunta={pregunta}
            setPregunta={setPregunta}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <Button variant="outlined" onClick={limpiarCamposFase2}>
            <CiCirclePlus /> Agregar otra pregunta
          </Button>
          <Botones />
        </div>
      </div>
    </>
  );
}

export default App;
