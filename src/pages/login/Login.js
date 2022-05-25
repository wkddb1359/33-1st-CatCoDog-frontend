import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="haimLogin">
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
              />
              <input
                className="pwInputBox"
                type="text"
                placeholder="비밀번호"
              />
            </div>
            <div className="checkAndTitle">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxTitle" checked>
                자동로그인
              </span>
            </div>
            <button className="blackBtn">기존 회원 로그인</button>
          </div>
          <div className="lastStage">
            <span className="findPwId">아이디/비밀번호 찾기</span>
            <a href="#top" className="firstSignUpBtn">
              가입하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
