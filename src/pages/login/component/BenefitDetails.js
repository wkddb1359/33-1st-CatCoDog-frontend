import React from 'react';
import TableList from './TableList';
import './BenefitDetails.scss';

const BenefitDetails = () => {
  return (
    <div className="benefitDetails">
      <h1>누적 구매금액: 0원</h1>
      <p className="tableTitle">회원 등급별 혜택 안내</p>
      <div className="detailTable">
        {DETAIL_LIST.map(({ name, standard }) => (
          <TableList name={name} standard={standard} />
        ))}
      </div>
      <p className="bottomText">최근 1개월 구매금액에 대해 산정됩니다.</p>
      <p className="bottomText">
        등급 조건 달성시 등급 변경은 매월 1일에 반영됩니다.
      </p>
      <p className="bottomText">
        구매혜택 조건은 실결제 기준(쿠폰, 적립금, 회원혜택 적용 후 배송비를
        제외한 결제금액)으로 적용됩니다.
      </p>
      <p className="bottomText">
        구매금액 반영은 배송완료 후 7일 이후에 반영됩니다.
      </p>
    </div>
  );
};

const DETAIL_LIST = [
  {
    id: 1,
    name: '등급명',
    standard: '등급기준',
  },
  {
    id: 2,
    name: '기본등급',
    standard: '기본',
  },
  {
    id: 3,
    name: '구매회원',
    standard: '100원',
  },
  {
    id: 4,
    name: '10만원 이상 구매자',
    standard: '100,000원',
  },
  {
    id: 5,
    name: '15만원 이상 구매자',
    standard: '150,000원',
  },
  {
    id: 6,
    name: '20만원 이상 구매자',
    standard: '200,000원',
  },
];

export default BenefitDetails;
