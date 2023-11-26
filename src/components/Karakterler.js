import React, { useState } from "react";
import Karakter from "./Karakter";
import { Accordion } from "reactstrap";
import "./Karakterler.css";

function Karakterler({ data }) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="char-container">
      <Accordion flush open={open} toggle={toggle}>
        {data.map((item) => (
          <Karakter item={item} />
        ))}
      </Accordion>
    </div>
  );
}
export default Karakterler;
