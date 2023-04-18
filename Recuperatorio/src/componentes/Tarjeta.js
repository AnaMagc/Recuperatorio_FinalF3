// CONSIGNAS EN TARJETA:
// 1- Importar Item
// 2- Utilizar el listadoPlataformas para renderizar la cantidad de Items acorde al array 🚩
// 3- Cada item debe tener como propiedades su key, pasar el metodo para elegir como favorita heradado por su padre y presentar el nombre de la plataforma

// El componente Tarjeta es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método heredado de App y se lo pasa a cada Item.

import React from "react";
import Item from "./Item";

const listadoPlataformas = ["Twitter", "Facebook", "Youtube"];

export default function Tarjeta(props) {
  const handleSelectPlatform = (listadoPlataformas) => {
    props.selectPlatform(listadoPlataformas);
  };

  return (
    <ul>
      {listadoPlataformas.map((platform, index) => (
        <Item
          key={index}
          name={platform}
          selectPlatform={handleSelectPlatform}
        />
      ))}
    </ul>
  );
}
