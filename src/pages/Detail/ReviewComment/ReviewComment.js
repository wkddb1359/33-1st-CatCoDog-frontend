import React, { useEffect, useState, useRef } from 'react';
import './ReviewComment.scss';
import Comment from './Comment/Comment';

function ReviewComment() {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const nextId = useRef(5);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentdata.json')
      .then(res => res.json())
      .then(data => setCommentList(data));
  }, []);

  const pushComment = e => {
    e.preventDefault();
    if (e.target.comment.value !== '')
      setCommentList([
        {
          id: nextId.current,
          userid: 'dkst****',
          content: comment,
          time: '2022-05-26 23:47',
        },
        ...commentList,
      ]);
    else alert('댓글을 입력하세요!');
    e.target.comment.value = '';
    nextId.current += 1;
  };

  const handleComment = e => {
    setComment(e.target.value);
  };

  return (
    <>
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
              onKeyUp={handleComment}
            >
              <input
                className="goodsReviewCommentInput"
                placeholder="댓글 입력"
                type="text"
                name="comment"
              />
              <select className="goodsReviewCommentInputStar">
                <option />
                <option>⭐</option>
                <option>⭐⭐</option>
                <option>⭐⭐⭐</option>
                <option>⭐⭐⭐⭐</option>
                <option>⭐⭐⭐⭐⭐</option>
              </select>
              <button className="goodsReviewCommentSubmitButton">💬</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewComment;
