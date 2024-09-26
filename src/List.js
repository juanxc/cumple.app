import React from "react";
import { parse } from "date-fns";

const List = ({ people }) => {
  const formatString = "dd/MM/yyyy";

  const cumplepeople = people.filter((person) => {
    const { birthdate } = person;
    let today = new Date();
    let mesActual = today.getMonth();

    let fenac = parse(birthdate, formatString, new Date());
    let mesCumple = fenac.getMonth();

    return mesActual === mesCumple;
  });
  return (
    <>
      <h3>{cumplepeople.length} cumpleaños de este mes</h3>
      {cumplepeople.map((person) => {
        const { id, name, birthdate, image } = person;
        const fechaNacimiento = parse(birthdate, formatString, new Date());
        const age = getAge(fechaNacimiento);
        let mesCumple = fechaNacimiento.getMonth();
        let diaCumple = fechaNacimiento.getDate();

        let today = new Date();
        let fechaCumpleEsteAnio = new Date(
          today.getFullYear(),
          mesCumple,
          diaCumple
        );
        let diaCumpleSemana = fechaCumpleEsteAnio.getDay();

        let week = [
          "Domingo",
          "Lunes",
          "Martes",
          "Miercoles",
          "Jueves",
          "Viernes",
          "Sábado",
        ];
        return (
          <article key={id} className="person">
            <figure>
              <header>{week[diaCumpleSemana]}</header>
              <section>{diaCumple}</section>
            </figure>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} años</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

function getAge(fechaNacimiento) {
  var today = new Date();
  var age = today.getFullYear() - fechaNacimiento.getFullYear();
  var m = today.getMonth() - fechaNacimiento.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < fechaNacimiento.getDate())) {
    age--;
  }
  return age;
}

export default List;
