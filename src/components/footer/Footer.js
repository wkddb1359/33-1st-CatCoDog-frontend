import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footerTop">
        <div className="numberBox">
          <strong>대표번호</strong>
          <br />
          <p className="number">1833-2648</p>
          <p>
            <br />
          </p>
          <span>운영시간 ㅣ 10:00~17:00</span>
          <br />
          <span>점심시간 ㅣ 11:30~13:00</span>
          <br />
          <span>cs-korea@petcodog.com</span>
          <br />
          <span>(주말/공휴일제외)</span>
        </div>
        <div className="InfoBox">
          <strong>Catcodog</strong>
          <p>
            <br />
          </p>
          <span>주식회사 캣코독</span>
          <br />
          <span>주소:서울특별시 강남구 테헤란로 427 위워크타워</span>
          <br />
          <span>제휴문의:catcodog@catcodog.com</span>
        </div>
        <div className="InstaBox">
          <i className="fa-brands fa-instagram" />
          <p>
            <br />
          </p>
          <span>브랜드 소개</span>
          <br />
          <span>공지사항</span>
        </div>
      </div>
      <div className="footerBottom">
        <div className="left">
          <span>이용약관 ㅣ 개인정보처리방침 ㅣ 사업자정보확인 </span>
        </div>
        <div className="right">
          <span>Copyright @ 캣코독</span>
          <span>hosting by 캣코독</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
