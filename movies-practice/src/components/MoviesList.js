import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MoviesList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          title={movie.title}
          releaseDate={movie.date}
          openingText={movie.text}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
