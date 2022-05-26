import React from 'react';

const LoginInput = () => {
  return (
    <input
      className="emailInputBox"
      type="text"
      placeholder="이메일"
      value={email}
      name="email"
      onChange={handleInput}
    />
  );
};

export default LoginInput;
