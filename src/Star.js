import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Star() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const rateValue = index + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={rateValue}
              onClick={() => setRating(rateValue)}
            />
            <FaStar
              className="stars"
              size="30"
              color={rateValue <= (hover || rating) ? "orange" : "#ccc"}
              onMouseEnter={() => setHover(rateValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p style={{ fontSize: "30px", color: "#555", textAlign: "center" }}>
        Ratings: {rating}
      </p>
    </div>
  );
}

export default Star;
