import React from 'react';
import { useState } from 'react';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import ListName from './component/ListName';
import BenefitDetails from './component/BenefitDetails';
import './MyPage.scss';

const MyPage = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Nav />
      <div className="myPage">
        <div className="wrapMyPage">
          <div className="leftColum">
            {LIST_NAME.map(({ id, title }) => (
              <ListName key={id} title={title} />
            ))}
          </div>
          <div className="rightColum">
            <div className="whiteBox">
              <img
                src="/images/profile.jpg"
                className="greyPic"
                alt="user-picture"
              />
              <div className="middleText">
                <h3 className="middleHeadText">
                  기본등급 안성주님 안녕하세요.
                </h3>
                <p className="spanMiddleText">구매금액 100원 달성 시</p>
                <p className="spanMiddleText">'구매회원'으로 승급됩니다.</p>
                <button
                  className="middleTextBtn"
                  onClick={() => {
                    setModal(!modal);
                  }}
                >
                  등급혜택 보기
                </button>
              </div>
              <div className="rightText">
                <span className="point">포인트</span>
                <span className="oneThousand">1.000</span>
              </div>
            </div>
            <p className="order">주문조회</p>
            <p className="cancel">취소 내역이 없습니다.</p>
            {modal === true ? <BenefitDetails /> : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const LIST_NAME = [
  {
    id: 1,
    title: '주문 조회',
  },
  {
    id: 2,
    title: '위시 리스트',
  },
  {
    id: 3,
    title: '취소/교환/반품',
  },
  {
    id: 4,
    title: '포인트',
  },
  {
    id: 5,
    title: '1:1 문의',
  },
  {
    id: 6,
    title: '정보 수정',
  },
  {
    id: 7,
    title: '회원탈퇴',
  },
];

export default MyPage;
