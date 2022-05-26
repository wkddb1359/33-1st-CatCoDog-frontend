import React from 'react';
import './ReviewComment.scss';

function ReviewComment() {
  return (
    <div className="goodsReviewWrapper">
      <p className="goodsReviewInfoText">
        상품을 구매하신 분들이 작성한 리뷰입니다.
      </p>
      <div className="goodsReviewCommentWrapper">
        {/* 댓글창 컴포넌트 및 map & (입력)기능 구현 */}
        <div className="goodsReviewFoam">
          <div className="goodsReviewComment">
            <div className="goodsReviewStarContainer">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
            <div className="goodsReviewCommentText">
              반려소반 바른통살 믿고 먹입니다. 앞으로도 좋은 상품 부탁드려요!
            </div>
          </div>
          <div className="goodsReviewUserInfo">
            <div className="goodsReviewUserID">syfo***</div>
            <div className="goodsReviewUserTime">2022-05-04 23:47</div>
          </div>
        </div>

        {/* 댓글창 컴포넌트 및 map & (입력)기능 구현 */}
        <div className="goodsReviewFoam">
          <div className="goodsReviewComment">
            <div className="goodsReviewCommentText">
              <div className="goodsReviewStarContainer">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              반려소반 바른통살 믿고 먹입니다. 앞으로도 좋은 상품 부탁드려요!
            </div>
          </div>
          <div className="goodsReviewUserInfo">
            <div className="goodsReviewUserID">syfo***</div>
            <div className="goodsReviewUserTime">2022-05-04 23:47</div>
          </div>
        </div>

        <div className="goodsReviewFoam">
          <div className="goodsReviewComment">
            <div className="goodsReviewCommentText">
              <div className="goodsReviewStarContainer">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              반려소반 바른통살 믿고 먹입니다. 앞으로도 좋은 상품 부탁드려요!
            </div>
          </div>
          <div className="goodsReviewUserInfo">
            <div className="goodsReviewUserID">syfo***</div>
            <div className="goodsReviewUserTime">2022-05-04 23:47</div>
          </div>
        </div>
      </div>
      <div className="goodsReviewCommentInputWrapper">
        <div className="goodsReviewCommentInputContainer">
          <input
            className="goodsReviewCommentInputFoam"
            placeholder="댓글 입력"
          />
          <select className="goodsReviewCommentInputStar">
            <option />
            <option>⭐</option>
            <option>⭐⭐</option>
            <option>⭐⭐⭐</option>
            <option>⭐⭐⭐⭐</option>
            <option>⭐⭐⭐⭐⭐</option>
          </select>
          <i class="fa-regular fa-envelope" />
        </div>
      </div>
    </div>
  );
}

export default ReviewComment;
