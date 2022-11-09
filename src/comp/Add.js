import React, { useState } from "react";

const Add = ({ addFilm }) => {
  const [name, setName] = useState("");
  const [Date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <h1>Titre</h1>
      <input
        placeholder="name"
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <input
        placeholder="date"
        type="text"
        name="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <br />
      <input
        placeholder="image"
        name="image"
        onChange={(e) => setImage(e.target.value)}
      />
      <br />
      <input
        type="text"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() =>
          addFilm({
            id: Math.random(),
            name: name,
            date: Date,
            image: image,
            description: description,
          })
        }
      >
        add
      </button>
    </div>
  );
};

export default Add;
