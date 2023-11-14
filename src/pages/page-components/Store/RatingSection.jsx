import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

import { FiveStars, Container } from '../../style-components/Store/Store-RatingSection'; 

const RatingSection = ({ onChangeHandler }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <FiveStars>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
            <Container>
                <label>
                    <input
                    className="rating"
                    type="radio"
                    name="star"
                    value={ratingValue}
                    onChange={(e) => onChangeHandler(e)}
                    onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                    className="star"
                    color={ratingValue <= (hover || rating) ? "#fcbe32" : "#e4e5e9"}
                    size={40}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    />
                </label>
            </Container>
        );
      })}
    </FiveStars>
  );
};

export default RatingSection;


