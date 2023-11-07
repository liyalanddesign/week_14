import React, { useState } from "react";

const ReviewForm = ({ onReviewSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onReviewSubmit({ text });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-submit">
      <textarea
        className="form-submit-textarea"
        value={text}
        rows="3"
        onChange={(e) => setText(e.target.value)}
        placeholder="Leave a review..."
      />
      <button className="btn btn-primary" type="submit">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
