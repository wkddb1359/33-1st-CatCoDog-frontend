import React from 'react';
import './ReviewSummary.scss';
import Star from '../Star/Star';

function ReviewSummary() {
  return (
    <div className="reviewSummaryWrapper">
      <div className="ratingPointContainer">
        <div className="ratingStar">
          <Star />
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
        <div className="bestCommentTitle">Best 구매자</div>
        <div className="bestCommentUserContainer">
          <ol className="bestCommentUserGroup">
            <li className="bestCommetUserId">wkddb1359</li>
            <li className="bestCommetUserId">rlatjdgns123</li>
            <li className="bestCommetUserId">tjdgywh8051</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ReviewSummary;
