import React from 'react';
import './AppContainer.scoped.scss';

function AppContainer({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}

export default AppContainer;
