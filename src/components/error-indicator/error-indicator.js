import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => (
  <div className="error-indicator">
    <span className="boom">BOOM!</span>
    <span>
        something has gone wrong
    </span>
  </div>
);

export default ErrorIndicator;
