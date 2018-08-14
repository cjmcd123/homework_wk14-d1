import React from "react";
import Film from "./Film.js";

const FilmList = (props) => {
  const filmNodes = props.data.map(film => {
    return (
    <Film key={film.id} img={film.img} title={film.title} rating={film.rating} url={film.url}></Film>
  )});
  return(
    <div className="film-list">{filmNodes}</div>
  );
}

export default FilmList;
