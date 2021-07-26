import React from 'react';
import styled from 'styled-components';

type Props = {
  page: string;
  className?: string;
  rank?: string;
};

const Base: React.FC<Props> = ({ page, className, rank }) => {
  return (
    <div className={rank ? `${className}__mainRank` : `${className}__main`}>
      <div className={`${className}__word`}>{page}</div>
      {rank ? (
        <div className={`${className}__rank`}>
          <img
            className={`${className}__img`}
            src={`/rank/Emblem_${rank}.png`}
          />
          <div className={`${className}__wordrank`}>{rank}</div>
        </div>
      ) : null}
    </div>
  );
};

const PageTitle = styled(Base)`
  &__main {
    font-size: 24px;
    color: #b2b2b2;
    height: 62px;
    border-bottom: 1px solid;
    border-color: #8c8c8c;
    display: flex;
    align-items: center;
  }
  &__mainRank {
    font-size: 24px;
    color: #b2b2b2;
    height: 105px;
    width: 100%;
    border-bottom: 1px solid;
    border-color: #8c8c8c;
    flex-direction: column;
  }
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

export default PageTitle;
