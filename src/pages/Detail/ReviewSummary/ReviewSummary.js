import React from 'react';
import './ReviewSummary.scss';

function ReviewSummary() {
  return (
    <div className="reviewSummaryWrapper">
      <div className="ratingPointContainer">
        {/* map함수 돌리기 & 컴포넌트화 */}
        <div className="ratingStar">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
        </div>

        <p className="ratingNumber">4.7</p>
      </div>
      <div className="ratingBarWrapper">
        <div className="ratingBarContainer">
          {/* map 어떻게 돌려야 할지 모르겠스므니다... */}
          <div className="ratingBar">
            <p className="ratingBarPoint">5점</p>
            <div className="progressBar">
              <div id="progressFive" className="progress" />
            </div>
          </div>
          <div className="ratingBar">
            <p className="ratingBarPoint">4점</p>
            <div className="progressBar">
              <div id="progressFour" className="progress" />
            </div>
          </div>
          <div className="ratingBar">
            <p className="ratingBarPoint">3점</p>
            <div className="progressBar">
              <div id="progressThree" className="progress" />
            </div>
          </div>
          <div className="ratingBar">
            <p className="ratingBarPoint">2점</p>
            <div className="progressBar">
              <div id="progressTwo" className="progress" />
            </div>
          </div>
          <div className="ratingBar">
            <p className="ratingBarPoint">1점</p>
            <div className="progressBar">
              <div id="progressOne" className="progress" />
            </div>
          </div>
        </div>
      </div>
      <div className="bestComment">
        <div className="bestCommentTitle">인기 댓글 모아 보기</div>
        <ul>
          <li className="bestCommentUserContainer">
            <span className="bestCommetUserId">wkddb1359</span>화이팅!
          </li>
          <li className="bestCommentUserContainer">
            <span className="bestCommetUserId">wkddb1359</span>반려소반!
          </li>
          <li className="bestCommentUserContainer">
            <span className="bestCommetUserId">wkddb1359</span>위코더!!
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ReviewSummary;
