import React from 'react';
import './SignUpRadioInput';

const SignUpRadioInput = ({
  id,
  title,
  name,
  object,
  identity,
  setPetTypeId,
  petNumber,
}) => {
  return (
    <div key={id}>
      <input
        type="radio"
        name={name}
        id={object}
        onChange={() => setPetTypeId(petNumber)}
      />
      <label for={object} className="radioText">
        {title}
      </label>
      <br />
    </div>
  );
};

export default SignUpRadioInput;
