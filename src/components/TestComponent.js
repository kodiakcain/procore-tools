import React, { useState } from 'react';
import './css/TestComponent.css';

/**
 * A simple test component that shows a button and displays a message when clicked.
 * @return {JSX.Element} The rendered TestComponent.
 */
const TestComponent = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Button clicked!');
  };

  return (
    <div className="test-component">
      <button className="test-button" onClick={handleClick}>
        Click Me
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default TestComponent;