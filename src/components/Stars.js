import React, { useState } from "react";
import "./Stars.css";

export default function Rating() {
  const [stars, setStar] = useState(0);

  function handlePlus() {
    if (stars < 5) {
      setStar(stars + 1);
    }
  }

  function handleMinus() {
    if (stars > 0) {
      setStar(stars - 1);
    }
  }

  return (
    <div className="rating">
      Stars:
      <button
        className="btn  btn-warning btn_rating btn_minus"
        onClick={handleMinus}
      >
        -
      </button>
      <span className="rating_score">{stars}</span>
      <button
        className="btn  btn-warning btn_rating btn_plus"
        onClick={handlePlus}
      >
        +
      </button>
    </div>
  );
}
