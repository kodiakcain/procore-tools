import React from 'react';
import './css/FadeIn.css';

const FadeIn = ({ children, duration = '2s', delay = '0s' }) => {
  const style = {
    animationDuration: duration,
    animationDelay: delay,
  };

  return (
    <div className="fade-in" style={style}>
      {children}
    </div>
  );
};

export default FadeIn;