import React from 'react';

const Square = (props) => {
  const { value, onClick } = props;

  return (
    <div className="cell">
      <div className="cellContent" onClick={onClick}>
        {value}
      </div>
    </div>
  );
};

export default Square;
