import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
const URL = "http://localhost:3001/rickandmorty/character";
export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`${URL}/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      {character ? (
        <Card
          key={id}
          id={id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin?.name}
          image={character.image}
        />
      ) : (
        <h1>Cargando..</h1>
      )}
    </div>
  );
}
