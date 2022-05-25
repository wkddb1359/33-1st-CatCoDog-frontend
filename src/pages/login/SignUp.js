import React from 'react';
import './SignUp.scss';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';

const SignUp = () => {
  return (
    <div>
      <Nav />
      <div className="haimSignUp">
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
              <input type="email" placeholder="이메일" className="inputs" />
              <input
                type="password"
                placeholder="비밀번호"
                className="inputs"
              />
              <input
                type="password"
                placeholder="비밀번호 확인"
                className="inputs"
              />
            </div>
            <div className="inputForm">
              <label className="inputTitle" for="name">
                이름(실명)<span className="redDot">•</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="이름(실명)을(를) 입력하세요"
                className="inputs"
              />
            </div>
            <div className="inputForm">
              <label className="inputTitle" for="phoneNum">
                연락처<span className="redDot">•</span>
              </label>
              <input
                type="tel"
                id="phoneNum"
                pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                placeholder="연락처"
                className="inputs"
                required
              />
              <span className="phoneFormat">[형식] : 123-4567-8910</span>
            </div>
            <div className="inputForm">
              <label className="inputTitle" for="phoneNum">
                주소<span className="redDot">•</span>
              </label>
              <input
                type="tel"
                id="phoneNum"
                placeholder="주소"
                className="inputs"
              />
            </div>
            <div className="inputForm">
              <p className="inputTitle">
                반려동물의 종류<span className="redDot">•</span>
              </p>
              <input type="radio" name="pets" id="petType" />
              <label for="petType" className="radioText">
                반려견
              </label>
              <br />
              <input type="radio" name="pets" id="petType" />
              <label for="petType" className="radioText">
                반려묘
              </label>
              <br />
              <input type="radio" name="pets" id="petType" />
              <label for="petType" className="radioText">
                반려동물 없음
              </label>
              <br />
            </div>
            <div className="inputForm">
              <p className="inputTitle">
                광고성 정보 수신동의(동의 시 1,000원 적릭금 지급)
                <span className="redDot">•</span>
              </p>
              <input type="radio" name="pets" id="agreement" />
              <label for="agreement" className="radioText">
                예,동의합니다.
              </label>
              <br />
              <input type="radio" name="pets" id="petType" />
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

export default SignUp;
