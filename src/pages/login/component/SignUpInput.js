import React from 'react';
import './SignUpInput.scss';

const SignUpInput = ({ id, title, type, name, placeholder, handleInput }) => {
  return (
    <div>
      <div className="SignUpInput" key={id}>
        {title && (
          <label className="inputTitle" for={name}>
            {title}
            <span className="redDot">•</span>
          </label>
        )}
        <input
          type={type}
          id={name}
          name={name}
          onChange={handleInput}
          placeholder={placeholder}
          className="inputs"
        />
      </div>
    </div>
  );
};

export default SignUpInput;
