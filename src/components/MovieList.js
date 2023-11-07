import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies, onReviewSubmit }) => {
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} onReviewSubmit={onReviewSubmit} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
