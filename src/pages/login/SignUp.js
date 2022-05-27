import React from 'react';
import { useState } from 'react';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import SignUpInput from './component/SignUpInput';
import SignUpRadioInput from './component/SignUpRadioInput';
import './SignUp.scss';

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    name: '',
    phone_mobile: '',
    address: '',
  });

  const { email, password, name, phone_number, address } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div>
      <Nav />
      <div className="SignUp">
        <div className="wrapSignUp">
          <div className="boxOfProfileImg">
            <img
              src="/images/profile.jpg"
              className="ProfileImg"
              alt="profile"
            />
          </div>
          <div className="signUpSection">
            <div className="inputForm">
              <input
                type="email"
                placeholder="이메일"
                className="inputs"
                value={email}
                name="email"
                onChange={handleInput}
              />
              <input
                type="password"
                placeholder="비밀번호"
                className="inputs"
                value={password}
                name="password"
                onChange={handleInput}
              />
              {/* <input
                type="password"
                placeholder="비밀번호 확인"
                className="inputs"
              /> */}
            </div>
            {SIGNUP_DATA.map(({ id, title, type, name, placeholder }) => (
              <SignUpInput
                key={id}
                title={title}
                type={type}
                name={name}
                placeholder={placeholder}
              />
            ))}
            <div className="inputForm">
              <p className="inputTitle">
                반려동물의 종류<span className="redDot">•</span>
              </p>
              {SIGNUPRADIO_DATA.map(({ id, title, name, object, identity }) => (
                <SignUpRadioInput
                  key={id}
                  title={title}
                  name={name}
                  id={identity}
                  for={object}
                />
              ))}
            </div>
            <div className="inputForm">
              <p className="inputTitle">
                광고성 정보 수신동의(동의 시 1,000원 적릭금 지급)
                <span className="redDot">•</span>
              </p>
              <input type="radio" name="agree" id="agreement" />
              <label for="agreement" className="radioText">
                예,동의합니다.
              </label>
              <br />
              <input type="radio" name="agree" id="petType" />
              <label for="agreement" className="radioText">
                아니오,동의하지 않습니다.
              </label>
              <br />
            </div>
            <div className="finalSignUp">
              <button className="SignUpBtn">가입하기</button>
              <p className="agreeSignUp">
                가입하시면 <span className="blueLetter">이용약관</span>에
                동의하게됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const SIGNUP_DATA = [
  {
    id: 1,
    title: '이름(실명)',
    type: 'text',
    name: 'name',
    placeholder: '이름(실명)을(를) 입력하세요',
  },
  {
    id: 2,
    title: '연락처',
    type: 'tel',
    name: 'phoneNum',
    placeholder: '연락처',
  },
  {
    id: 3,
    title: '주소',
    type: 'text',
    name: 'address',
    placeholder: '주소',
  },
];

const SIGNUPRADIO_DATA = [
  {
    id: 1,
    title: '반려견',
    name: 'pets',
    object: 'petType',
    identity: 'petType',
  },
  {
    id: 2,
    title: '반려묘',
    name: 'pets',
    object: 'petType',
    identity: 'petType',
  },
  {
    id: 3,
    title: '반려견, 반려묘 둘 다 ',
    name: 'pets',
    object: 'petType',
    identity: 'petType',
  },
  {
    id: 4,
    title: '반려동물 없음',
    name: 'pets',
    object: 'petType',
    identity: 'petType',
  },
];

export default SignUp;

// value={email}
// name="email"
// onChange={handleInput}
