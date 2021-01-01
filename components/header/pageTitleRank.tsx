import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  page: string;
  rank: string;
};

const Base: React.FC<Props> = ({ className, page, rank }) => {
  return (
    <div className={`${className}`}>
      <div className={`${className}__word`}>{page}</div>
      <div className={`${className}__rank`}>
        <img className={`${className}__img`} src={`/rank/Emblem_${rank}.png`} />
        <div className={`${className}__wordrank`}>{rank}</div>
      </div>
    </div>
  );
};

const PageTitleRank = styled(Base)`
  font-size: 20px;
  color: #b2b2b2;
  position: relative;
  height: 105px;
  width: 89%;
  border-bottom: 1px solid;
  border-color: #8c8c8c;
  flex-direction: column;
  &__word {
    margin-left: 50px;
  }
  &__rank {
    display: flex;
    font-size: 32px;
    margin-left: 50px;
    margin-right: auto;
    height: 60px;
    width: 270px;
    border-radius: 10px;
    color: #ffffff;
    background-color: #5987cd;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  &__img {
    height: 45px;
    width: 40px;
    margin-left: 5px;
  }
  &__wordrank {
    margin-left: 15px;
    margin-right: 80px;
    font-weight: bold;
  }
`;

export default PageTitleRank;
