import React from 'react';
import './css/FadeOut.css';

const FadeOut = ({ children, duration = '2s', delay='0s' }) => {
  const style = {
    animationDuration: duration,
    animationDelay: delay,
  };

  return (
    <div className="fade-out" style={style}>
      {children}
    </div>
  );
};

export default FadeOut;