import React from 'react';
import './SignUpRadioInput';

const SignUpRadioInput = ({ id, title, name, object, identity }) => {
  return (
    <div key={id}>
      <input type="radio" name={name} id={identity} />
      <label for={object} className="radioText">
        {title}
      </label>
      <br />
    </div>
  );
};

export default SignUpRadioInput;
