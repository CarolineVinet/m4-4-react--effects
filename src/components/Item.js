import React from "react";

const Item = ({ name, cost, value, numOwned, handleClick, isFirst }) => {
  const itemRef = React.useRef(null);

  React.useEffect(() => {
    if (isFirst) {
      itemRef.current.focus();
    }
  });

  return (
    <button ref={itemRef} onClick={handleClick}>
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
