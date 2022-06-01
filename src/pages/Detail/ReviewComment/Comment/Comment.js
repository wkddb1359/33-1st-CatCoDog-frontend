import React from 'react';
import Star from '../../Star/Star';
import './Comment.scss';

function Comment({ commentData }) {
  const { star, content, userid, time } = commentData;

  return (
    <div className="comment">
      <div className="goodsReviewComment">
        <div className="goodsReviewStarContainer">
          <Star starCount={star} />
        </div>
        <div className="goodsReviewCommentText">{content}</div>
      </div>
      <div className="goodsReviewUserInfo">
        <div className="goodsReviewUserID">{userid}</div>
        <div className="goodsReviewUserTime">{time}</div>
      </div>
    </div>
  );
}

export default Comment;
