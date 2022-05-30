import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpInput from './component/SignUpInput';

import './Login.scss';

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const passwordCondition =
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

  const isValidLogin =
    email.includes('@') &&
    email.includes('.') &&
    passwordCondition.test(inputValue.password);

  const goToSignUp = () => {
    navigate('/signup');
  };
  const navigate = useNavigate();

  const goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.5.114:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify(JSON.stringify(inputValue)),
    })
      .then(res => res.json())
      .then(result => {
        if (result.ACCESS_TOKEN) {
          localStorage.setItem('ACCESS_TOKEN', result.ACCESS_TOKEN);
        } else {
          alert('잘못된 아이디 또는 비밀번호 입니다.');
        }
      });
    navigate('/');
  };

  return (
    <div className="loginPage">
      <div className="wrapLogin">
        <div className="loginHeader">
          <button className="backBtn">
            <span>&#60;</span>뒤로가기
          </button>
          <h1>
            <img
              className="headerLogo"
              src="/images/logo.png"
              alt="캣코독 로고"
            />
          </h1>
          <hr className="fistHr" />
        </div>
        <div className="loginSection">
          <div className="KaKLogin">
            <h2 className="kakTitle">로그인</h2>
            <p className="kakText">
              아이디와 비밀번호 입력하기 귀찮으시죠?
              <br />
              카카오로 1초 만에 로그인 하세요.
            </p>
            <button className="yellowBtn">
              <span className="blackCircle">⚫</span>
              <span className="buttonText">캐캐오 1초 로그인/회원가입</span>
            </button>
          </div>
          <div className="middleHr">
            <hr className="leftHr" />
            <span className="textInMiddleHr">또는</span>
            <hr className="righttHr" />
          </div>
          <div className="tabMenu">
            <button className="memberLogin">일반 로그인</button>
          </div>
          <div className="normalLogin">
            {LOGIN_DATA.map(({ id, title, type, name, placeholder }) => (
              <SignUpInput
                key={id}
                title={title}
                type={type}
                name={name}
                placeholder={placeholder}
                handleInput={handleInput}
              />
            ))}
            <div className="checkAndTitle">
              <input type="checkbox" className="checkbox" checked />
              <span className="checkboxTitle">자동로그인</span>
            </div>
            <button
              className="blackBtn"
              onClick={goToMain}
              disabled={!isValidLogin}
            >
              기존 회원 로그인
            </button>
          </div>
          <div className="lastStage">
            <span className="findPwId">아이디/비밀번호 찾기</span>
            <button className="firstSignUpBtn" onClick={goToSignUp}>
              가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LOGIN_DATA = [
  {
    id: 1,
    type: 'text',
    name: 'email',
    placeholder: '이메일',
  },
  {
    id: 2,
    type: 'password',
    name: 'password',
    placeholder: '비밀번호',
  },
];

export default Login;
