import React from 'react';
import './css/Bounce.css';

const Bounce = ({ children, duration = '0.6s', delay = '0s', count = 'infinite', direction = 'up' }) => {
  const style = {
    animationDuration: duration,
    animationDelay: delay,
    animationIterationCount: count,
    animationName: `bounce-${direction}`, 
  };

  return (
    <div className={`bounce bounce-${direction}`} style={style}>
      {children}
    </div>
  );
};

export default Bounce;