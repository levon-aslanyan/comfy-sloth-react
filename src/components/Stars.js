import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;

const Stars = ({ stars, reviews }) => {
  const tempStars = new Array(5).fill(0).map((_, index) => {
    const numberStar = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= numberStar ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      {/* <div className="stars">
        <span>
          {stars >= 1 ? (
            <BsStarFill />
          ) : stars > 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>

        <span>
          {stars >= 2 ? (
            <BsStarFill />
          ) : stars > 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>

        <span>
          {stars >= 3 ? (
            <BsStarFill />
          ) : stars > 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>

        <span>
          {stars >= 4 ? (
            <BsStarFill />
          ) : stars > 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>

        <span>
          {stars === 5 ? (
            <BsStarFill />
          ) : stars > 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
      </div> */}
      <div>{tempStars}</div>

      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

export default Stars;
