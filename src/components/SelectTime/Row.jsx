import React from 'react';

function Row(props) {
  const {
    children,
  } = props;

  return (
    <div>
      {children}
    </div>
  );
}

export default Row;
