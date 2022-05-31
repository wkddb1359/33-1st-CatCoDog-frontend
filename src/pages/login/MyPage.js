import React from 'react';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import ListName from './component/ListName';
import './MyPage.scss';

const MyPage = () => {
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
                <h3>기본등급 아무개님 안녕하세요.</h3>
                <p>구매금액 100원 달성 시</p>
                <p>'구매회원'으로 승급됩니다.</p>
                <button className="middleTextBtn">등급혜택 보기</button>
              </div>
              <div className="rightText">
                <span>포인트</span>
                <span>1.000</span>
              </div>
            </div>
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
