import React from 'react';
import './SelectTime.scoped.scss';

function ItemTime(props) {
  const {
    value,
  } = props;

  return (
    <div className="item-time">
      {value}
    </div>
  );
}

export default ItemTime;
