import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import "./Karakter.css";
function Karakter({ item }) {
  return (
    <AccordionItem className="accordion">
      <AccordionHeader targetId={item.name}>{item.name}</AccordionHeader>
      <AccordionBody accordionId={item.name}>
        <p className="movie-p">
          {item.gender === "male" ? "He " : null}
          {item.gender === "female" ? "She " : null}
          {item.gender === "n/a" ? "It " : null}
          appeared in {item.films.length} movies.
        </p>
        <p>
          <strong>Height: </strong>
          {item.height}
        </p>
        <p>
          <strong>Gender: </strong>
          {item.gender}
        </p>
        <p>
          <strong>Mass: </strong>
          {item.mass}
        </p>
        <p>
          <strong>Birth Year: </strong>
          {item.birth_year}
        </p>
        <p>
          <strong>Eye Color: </strong>
          {item.eye_color}
        </p>
        <p>
          <strong>Hair Color: </strong>
          {item.hair_color}
        </p>
        <p>
          <strong>Skin Color: </strong>
          {item.skin_color}
        </p>
      </AccordionBody>
    </AccordionItem>
  );
}

export default Karakter;
