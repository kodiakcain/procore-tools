import React, { useEffect, useRef } from 'react';
import './css/SlideOut.css';

const SlideOut = ({ children, duration = '2s', delay = '0s', distance = '100%' }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty('--slide-distance', distance);
    }
  }, [distance]);

  const style = {
    animationDuration: duration,
    animationDelay: delay,
  };

  return (
    <div className="slide-out" style={style} ref={ref}>
      {children}
    </div>
  );
};

export default SlideOut;