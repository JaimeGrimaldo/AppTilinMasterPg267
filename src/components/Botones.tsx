import estilos from "./Botones.module.css";
import { FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
export const Botones = () => {
  return (
    <div className={estilos.contenedor}>
      <button className={estilos.confirmar}>
        <FaCheck /> Crear encuesta
      </button>
      <button className={estilos.cancelar}>
        <AiOutlineClose /> Eliminar encuesta
      </button>
    </div>
  );
};
