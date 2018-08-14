import React, {Component} from "react";
import FilmList from "../components/FilmList.js";
import "./FilmBox.css";

class FilmBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: 1,
        title: "Ant-Man and the Wasp",
        rating: "12A",
        img: "https://images.mymovies.net/images/film/cin/500x377/fid18327.jpg",
        url: "https://www.showcasecinemas.co.uk/film-info/ant-man-and-the-wasp#vwziRAjp5xykeMSx.97"
      },
      {
        id: 2,
        title: "Mission: Impossible Fallout",
        rating: "12A",
        img: "https://images.mymovies.net/images/film/cin/500x377/fid18335.jpg",
        url: "https://www.showcasecinemas.co.uk/film-info/mission-impossible-fallout#cOjbk5x1yXJjDUo8.97"
      },
      {
        id: 3,
        title: "Mama Mia! Here We Go Again",
        rating: "PG",
        img: "https://images.mymovies.net/images/film/cin/500x377/fid18261.jpg",
        url: "https://www.showcasecinemas.co.uk/film-info/mamma-mia-here-we-go-again#ZcfDbV5zo6m6HlW8.97"
      },
      {
        id: 4,
        title: "Incredibles 2",
        rating: "PG",
        img: "https://images.mymovies.net/images/film/cin/500x377/fid18181.jpg",
        url: "https://www.showcasecinemas.co.uk/film-info/the-incredibles-2#DLMQXA1Oh9SKYUoj.97"
      },
      {
        id: 5,
        title: "The Meg",
        rating: "12A",
        img: "https://images.mymovies.net/images/film/cin/500x377/fid18397.jpg",
        url: "https://www.showcasecinemas.co.uk/film-info/the-meg#A3VAWzAh3yqSGJSR.97"
      },
      {
        id: 6,
        title: "The Darkest Minds",
        rating: "12A",
        img: "https://images.mymovies.net/images/film/cin/500x377/fid18395.jpg",
        url: "https://www.showcasecinemas.co.uk/film-info/the-darkest-minds#zTdXl252gm6BjwKc.97"
      },
      {
        id: 7,
        title: "Dog Days",
        rating: "12A",
        img: "https://images.mymovies.net/images/film/cin/500x377/fid18780.jpg",
        url: "https://www.showcasecinemas.co.uk/film-info/dog-days#H8KXVvpM1itXG0CX.97"
      },
      {
        id: 8,
        title: "Hotel Transylvania 3: A Monster Vacation",
        rating: "U",
        img: "https://images.mymovies.net/images/film/cin/500x377/fid18180.jpg",
        url: "https://www.showcasecinemas.co.uk/film-info/hotel-transylvania-3#0Ay1eBILmTPKkBht.97"
      },
      {
        id: 9,
        title: "I Can Only Imagine",
        rating: "PG",
        img: "https://filmdb.showcasecinemas.co.uk/FilmImages/45/3/49566/i%20%20quad%20%282%29.jpg",
        url: "https://www.showcasecinemas.co.uk/film-info/i-can-only-imagine#mJ2Q4Bxx8zKy6yZC.97"
      },
      {
        id: 10,
        title: "Sgt. Stubby: An Unlikely Hero",
        rating: "PG",
        img: "https://images.mymovies.net/images/film/cin/500x377/fid18843.jpg",
        url: "https://www.showcasecinemas.co.uk/film-info/the-giant-pear#vGIyWBYjXBe2SO3x.97"
      },
      {
        id: 11,
        title: "Skyscraper",
        rating: "12A",
        img: "https://images.mymovies.net/images/film/cin/500x377/fid18300.jpg",
        url: "https://www.showcasecinemas.co.uk/film-info/skyscraper#g7DXBuvrZX4qepBy.97"
      },
      {
        id: 12,
        title: "Teen Titans Go! To The Movies",
        rating: "PG",
        img: "https://images.mymovies.net/images/film/cin/500x377/fid18277.jpg",
        url: "https://www.showcasecinemas.co.uk/film-info/teen-titans-go-to-the-movies#lQD4ohMBBm6lDXkS.97"
      },
      {
        id: 13,
        title: "The Domestics",
        rating: "18",
        img: "https://filmdb.showcasecinemas.co.uk/FilmImages/45/3/49593/The%20Domestics%20quad.JPG",
        url: "https://www.showcasecinemas.co.uk/film-info/the-domestics#3AV5EgQWMkTvMxFD.97"
      },
      {
        id: 14,
        title: "The First Purge",
        rating: "15",
        img: "https://images.mymovies.net/images/film/cin/500x377/fid18517.jpg",
        url: "https://www.showcasecinemas.co.uk/film-info/the-first-purge#C7E69WaUvfkTww0b.97"
      },
      {
        id: 15,
        title: "Unfriended: Dark Web",
        rating: "18",
        img: "https://images.mymovies.net/images/film/cin/500x377/fid18765.jpg",
        url: "https://www.showcasecinemas.co.uk/film-info/unfriended-dark-web#kiHm1mW8LKVOv4EI.97"
      }]
    }
  }

  render(){
    return (
      <div className="film-box">
        <h1>UK Film Showings</h1>
      <FilmList data={this.state.data}/>
      <a href="https://www.showcasecinemas.co.uk/showtimes/showcase-glasgow" className="button">Get Showtimes</a>
      </div>
    );
  }
}

export default FilmBox;
