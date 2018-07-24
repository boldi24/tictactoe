import React from 'react';
import PropTypes from 'prop-types';

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

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Square;
