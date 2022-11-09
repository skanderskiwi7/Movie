import "./App.css";
import React, { useState } from "react";

import { moviesData } from "./comp/Data";
import { Movielist } from "./Movielist";
import Add from "./comp/Add";

function App() {
  const [MovieData, setMovieData] = useState(moviesData);
  // ici on va debuter les fonctions
  const handledelete = (ID) => {
    setMovieData(MovieData.filter((e) => e.id !== ID));
  };
  const handleseen = (ID) => {
    console.log(handleseen);
    setMovieData(
      MovieData.map((e) => (e.id !== ID ? { ...e, seen: !e.seen } : { e }))
    );
  };
  const addFilm = (newMovie) => {
    setMovieData([...MovieData, newMovie]);
  };

  return (
    <div className="App">
      <Movielist
        MovieData={MovieData}
        handledelete={handledelete}
        handleseen={handleseen}
      />
      <Add addFilm={addFilm} />
    </div>
  );
}

export default App;
