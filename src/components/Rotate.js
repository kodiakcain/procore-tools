import React, { useEffect, useRef } from 'react';
import './css/Rotate.css';

const Rotate = ({ children, duration = '2s', delay = '0s', angle = '360deg', direction = 'x' }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty('--rotate-angle', angle);
    }
  }, [angle]);

  const style = {
    animationDuration: duration,
    animationDelay: delay,
    animationName: `bounce-${direction}`,
  };

  return (
    <div className={`rotate-${direction}`} style={style} ref={ref}>
      {children}
    </div>
  );
};

export default Rotate;