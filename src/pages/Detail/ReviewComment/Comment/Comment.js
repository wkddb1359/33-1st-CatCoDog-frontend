import React from 'react';
import './Comment.scss';
import Star from '../../Star/Star';

function Comment({ commentData, starCount }) {
  return (
    <div className="goodsReviewFoam">
      <div className="goodsReviewComment">
        <div className="goodsReviewStarContainer">
          <Star starCount={starCount} />
        </div>
        <div className="goodsReviewCommentText">{commentData.content}</div>
      </div>
      <div className="goodsReviewUserInfo">
        <div className="goodsReviewUserID">{commentData.userid}</div>
        <div className="goodsReviewUserTime">{commentData.time}</div>
      </div>
    </div>
  );
}

export default Comment;
