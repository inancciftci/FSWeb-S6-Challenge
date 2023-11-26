import React, { useEffect, useState } from "react";
import Karakterler from "./components/Karakterler";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => console.warn(err.message));
  });

  return (
    <div className="App">
      <h1 className="Header">Karakterler deneme</h1>
      <Karakterler data={data} />
    </div>
  );
};

export default App;
