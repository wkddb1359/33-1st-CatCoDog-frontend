import React from 'react';
import './SignUpInput.scss';

const SignUpInput = ({ id, title, type, name, placeholder }) => {
  return (
    <div>
      <div className="SignUpInput" key={id}>
        <label className="inputTitle" for={name}>
          {title}
          <span className="redDot">•</span>
        </label>
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          className="inputs"
        />
      </div>
    </div>
  );
};

export default SignUpInput;
