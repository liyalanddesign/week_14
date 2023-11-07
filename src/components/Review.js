import React from "react";

const Review = ({ review }) => {
  return (
    <div className="review">
      <span className="review_span">Comment:</span> {review.text}
    </div>
  );
};

export default Review;
