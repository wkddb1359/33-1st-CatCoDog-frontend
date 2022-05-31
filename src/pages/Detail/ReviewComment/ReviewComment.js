import React, { useEffect, useState, useRef } from 'react';
import Comment from './Comment/Comment';
import './ReviewComment.scss';

function ReviewComment() {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const nextId = useRef(5);

  const [starCount, setStarCount] = useState(5);

  const check = e => {
    setStarCount(e.target.value);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/commentdata.json')
      .then(res => res.json())
      .then(data => setCommentList(data));
  }, []);

  const pushComment = e => {
    e.preventDefault();
    if (e.target.comment.value !== '') {
      setCommentList([
        {
          id: nextId.current,
          userid: 'dkst****',
          content: comment,
          time: '2022-05-26 23:47',
          star: starCount,
        },
        ...commentList,
      ]);
    } else alert('댓글을 입력하세요!');

    e.target.comment.value = '';
    e.target.star.value = '';
    nextId.current += 1;
  };

  const handleComment = e => {
    setComment(e.target.value);
  };

  return (
    <div className="reviewComment">
      <div className="goodsReviewTitle">
        구매평<span className="goodsReviewCount">{commentList.length}</span>
      </div>
      <div className="goodsReviewWrapper">
        <p className="goodsReviewInfoText">
          상품을 구매하신 분들이 작성한 리뷰입니다.
        </p>
        <div className="goodsReviewCommentWrapper">
          {commentList.map(commentData => (
            <Comment key={commentData.id} commentData={commentData} />
          ))}
        </div>
        <div className="goodsReviewCommentInputWrapper">
          <div className="goodsReviewCommentInputContainer">
            <form
              className="goodsReviewCommentInputForm"
              onSubmit={pushComment}
            >
              <input
                className="goodsReviewCommentInput"
                placeholder="댓글 입력"
                type="text"
                name="comment"
                onKeyUp={handleComment}
              />
              <select
                className="goodsReviewCommentInputStar"
                onChange={check}
                name="star"
              >
                <option value={5}>⭐⭐⭐⭐⭐</option>
                <option value={4}>⭐⭐⭐⭐</option>
                <option value={3}>⭐⭐⭐</option>
                <option value={2}>⭐⭐</option>
                <option value={1}>⭐</option>
              </select>
              <button className="goodsReviewCommentSubmitButton">💬</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewComment;
