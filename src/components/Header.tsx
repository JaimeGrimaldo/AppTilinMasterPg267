import React from "react";
import estilo from "./Header.module.css";
import { IoIosArrowDown } from "react-icons/io";
const Header: React.FC = () => {
  return (
    <div className={estilo.contenedor}>
      <nav className={estilo.barraNavegacion}>
        <a href="">Tú opinión</a>
        <a href="">Inicio</a>
        <a href="">Encuestas</a>
      </nav>
      <div className={estilo.derecha}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
          alt="Foto ejemplo"
        />
        <h1>Nombre de usuario</h1>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Header;
