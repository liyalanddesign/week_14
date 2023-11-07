import React, { useState } from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import "./Movie.css";

const Movie = ({ movie, reviews, onRatingChange, onReviewSubmit }) => {
  return (
    <div className="col-sm-12 col-md-6">
      <div className="card">
        <div className="card_container">
          <img
            className="card_poster"
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.image}`}
            alt={movie.title}
          />
          <div className="card_body">
            <div className="card_title">{movie.title}</div>
            <div className="card_text">{movie.synopsis}</div>
            <div className="card_rating-container">
              <div className="card_rating">
                <Stars />
              </div>
            </div>
            <ReviewList reviews={movie.reviews} />
            <ReviewForm
              onReviewSubmit={(review) => onReviewSubmit(movie.id, review)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
