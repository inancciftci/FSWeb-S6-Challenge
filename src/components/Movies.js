import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
function Movies({ e }) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get(e).then((res) => setMovie(res.data));
  });
  return (
    <Accordion flush open={open} toggle={toggle}>
      <AccordionItem>
        <AccordionHeader targetId={movie.title}>
          <p>
            {movie.title} Episode: {movie.episode_id}
          </p>
        </AccordionHeader>
        <AccordionBody accordionId={movie.title}>
          <p>
            <strong>Director: </strong>
            {movie.director}
          </p>
          <p>
            <strong>Producer: </strong>
            {movie.producer}
          </p>
          <p>{movie.opening_crawl}</p>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
export default Movies;
