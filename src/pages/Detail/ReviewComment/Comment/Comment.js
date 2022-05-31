import React from 'react';
import Star from '../../Star/Star';
import './Comment.scss';

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
