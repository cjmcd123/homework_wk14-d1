import React from "react";
import "./Film.css";

const Film = (props) => {
  return(
    <div className="film">
      <img src={props.img} alt="Movie Poster"/>
      <div className="film-text">
      <h4 className="film-title">{props.title}</h4>
      <h6 className="film-rating">{props.rating}</h6>
      <a href={props.url}>See Showings</a>
      </div>
    </div>
  );
}

export default Film;
