import React from 'react';
import './Comment.scss';
import Star from '../../Star/Star';

function Comment({ commentData }) {
  return (
    <div className="goodsReviewFoam">
      <div className="goodsReviewComment">
        <div className="goodsReviewStarContainer">
          <Star />
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
