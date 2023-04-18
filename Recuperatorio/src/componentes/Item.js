// CONSIGNAS EN ITEM:  🚩
// 1- crear un <li> que tenga su click preparado para ejecutar el metodo heredado para seleccionar la plataforma como favorita
// 2- Presentar el nombre de la plataforma que le llega como prop

// El componente Item:
// ESTADO: Item no necesita manejar un estado.
// MÉTODOS: Item no requiere de métodos.
// PROPS: Item recibe como props el método para modificar la plataforma favorita y su respectivo nombre como contenido.

import React from "react";

const SelectPlatform = ({ name, selectItem }) => {
  const handleSelect = () => {
    SelectPlatform(name);
  };
}

export default function Item(props) {
  const handleSelect = () => {
    props.selectItem(props.name);
  };

  return (
    <li onClick={handleSelect}>
      {props.name}
    </li>
  );
};