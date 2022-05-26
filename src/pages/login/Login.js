import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
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

  const valid = passwordCondition.test(inputValue.password);

  // const specialLetter = pw.search(/[`s~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  // const num = pw.search(/[0-9]/g);
  // const engLetter = pw.search(/[A-z a-z]/gi);

  const isValidLogin =
    email.includes('@') &&
    email.includes('.') &&
    passwordCondition.test(inputValue.password);

  // const navigate = useNavigate();

  // const goToMain = e => {
  //   e.preventDefault();
  //   navigate('/');
  // };

  // useEffect(() => {
  //   fetch('http://10.58.2.1:8000/users/signin', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: 'inputValue.email',
  //       password: 'inputValue.password',
  //     }),
  //   }) //덩어리 제이슨을 받아옴
  //     .then(res => res.json()) //덩어리 제이슨을 객체 현태로 변환
  //     .then(data => {
  //       goToMain(data);
  //     }); //변환된 제이슨 덩어리를 setCommentList에 저장해서 관리
  // }, []);

  const goToSignUp = () => {
    navigate('/signup');
  };
  const navigate = useNavigate();

  const goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.2.1:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.ACCESS_TOKEN) {
          console.log(result.ACCESS_TOKEN);
          localStorage.setItem('ACCESS_TOKEN', result.ACCESS_TOKEN);
        }
      });
    navigate('/');
  };

  return (
    <div className="Login">
      <div className="wrapLogin">
        <div className="loginHeader">
          <button className="backBtn">
            <span>&#60;</span>뒤로가기
          </button>
          <h1>
            <img
              className="headerLogo"
              src="/images/logo.jpg"
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
            <div className="inputBox">
              <input
                className="emailInputBox"
                type="text"
                placeholder="이메일"
                value={email}
                name="email"
                onChange={handleInput}
              />
              <input
                className="pwInputBox"
                type="password"
                placeholder="비밀번호"
                value={password}
                name="password"
                onChange={handleInput}
              />
            </div>
            <div className="checkAndTitle">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxTitle" checked>
                자동로그인
              </span>
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

export default Login;
