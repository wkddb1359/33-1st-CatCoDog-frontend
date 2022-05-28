import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import SignUpInput from './component/SignUpInput';
import SignUpRadioInput from './component/SignUpRadioInput';
import './SignUp.scss';

const SignUp = () => {
  const [checkBoxActive, setCheckBoxActive] = useState(false);

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    name: '',
    mobile_number: '',
    address: '',
  });
  const [inputPetType, setInputPetType] = useState(); // 펫타입의 상태값 관리.

  console.log(inputValue);
  const { email, password, name, mobile_number, address } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const isValidEmail = email.includes('@') && email.includes('.');

  const isValidInput =
    mobile_number.length === 11 && name.length >= 0 && address.length >= 0;

  const passwordCondition =
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

  const isValidPw = passwordCondition.test(inputValue.password);

  const isCheckBoxClicked = () => {
    checkBoxActive === true
      ? setCheckBoxActive(false)
      : setCheckBoxActive(true);
    console.log('checkBoxActive123', checkBoxActive);
  };

  const getIsActive =
    isValidInput && isValidEmail && isValidPw && checkBoxActive === true;

  // const handleButtonValid = () => {
  //   if (!isValidInput && !isValidEmail && !isValidPw && !isCheckBoxClicked()) {
  //     alert('Please fill in the blanks');
  //   }
  // };

  const navigate = useNavigate();

  const goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.5.114:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
        name: inputValue.name,
        mobile_number: inputValue.mobile_number,
        address: inputValue.address,
        pet_type: inputPetType,
        email_subscription: checkBoxActive,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.ACCESS_TOKEN) {
          // console.log(result.ACCESS_TOKEN);
          localStorage.setItem('ACCESS_TOKEN', result.ACCESS_TOKEN);
        }
      });
    navigate('/');
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
            <div className="inputForm" />
            {SIGNUP_DATA.map(({ id, title, type, name, placeholder }) => (
              <SignUpInput
                key={id}
                title={title}
                type={type}
                name={name}
                placeholder={placeholder}
                handleInput={handleInput}
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
                  setPetTypeId={setInputPetType}
                  petNumber={id}
                />
              ))}
            </div>
            <div className="inputForm">
              <p className="inputTitle">
                광고성 정보 수신동의
                <span className="redDot">•</span>
              </p>
              <input
                type="radio"
                name="agree"
                id="agreement"
                onChange={isCheckBoxClicked}
              />
              <label for="agreement" className="radioText">
                예,동의합니다.
              </label>
              <br />
              <input
                type="radio"
                name="agree"
                id="petType"
                onChange={isCheckBoxClicked}
              />
              <label for="agreement" className="radioText">
                아니오,동의하지 않습니다.
              </label>
              <br />
            </div>
            <div className="finalSignUp">
              <button
                className="SignUpBtn"
                onClick={goToMain}
                disabled={!getIsActive}
              >
                가입하기
              </button>
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
  {
    id: 3,
    title: '이름(실명)',
    type: 'text',
    name: 'name',
    placeholder: '이름(실명)을(를) 입력하세요',
  },
  {
    id: 4,
    title: '연락처',
    type: 'tel',
    name: 'mobile_number',
    placeholder: '연락처',
  },
  {
    id: 5,
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
