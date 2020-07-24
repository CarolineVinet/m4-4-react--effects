import React from "react";

const Item = ({ name, cost, value, numOwned, handleClick }) => {
  return (
    <button onClick={handleClick}>
      <div>
        <h2>{name}</h2>
        <p>
          Cost: {cost} cookie(s). Produces {value} cookie(s) per second.{" "}
        </p>
      </div>
      <div>
        <p>{numOwned}</p>
      </div>
    </button>
  );
};

export default Item;
