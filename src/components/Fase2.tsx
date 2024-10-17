import React from "react";
import estilos from "./Fase2.module.css";
import Select from "react-select";
import RadioButtonsGroup from "./RadioButton";
import { Parrafo } from "./Parrafo";

interface Fase2Props {
  pregunta: string;
  setPregunta: (value: string) => void;
  selectedOption: string | null;
  setSelectedOption: (value: string | null) => void;
}

const Fase2: React.FC<Fase2Props> = ({ pregunta, setPregunta, selectedOption, setSelectedOption }) => {
  const options = [
    { value: "Radio", label: "Opción Múltiple" },
    { value: "TextArea", label: "Escribir párrafo" },
  ];

  const handleSelectChange = (selected: any) => {
    setSelectedOption(selected?.value || null);
  };

  return (
    <div className={estilos.contenedor}>
      <div>
        <input
          type="text"
          placeholder="Escriba su pregunta"
          className={estilos.pregunta}
          value={pregunta}
          onChange={(e) => setPregunta(e.target.value)}
        />
      </div>
      <div>
        <Select options={options} onChange={handleSelectChange} value={options.find(opt => opt.value === selectedOption)} />
      </div>

      {selectedOption === "Radio" && <RadioButtonsGroup />}
      {selectedOption === "TextArea" && <Parrafo />}
    </div>
  );
};

export default Fase2;
