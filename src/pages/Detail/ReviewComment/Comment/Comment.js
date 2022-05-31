import React from 'react';
import './Comment.scss';
import Star from '../../Star/Star';

function Comment({ commentData }) {
  return (
    <div className="comment">
      <div className="goodsReviewComment">
        <div className="goodsReviewStarContainer">
          <Star starCount={commentData.star} />
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
