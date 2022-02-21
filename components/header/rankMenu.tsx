import Link from 'next/link';
import rank from 'public/json/rank.json';
import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  baseUrl: string;
};

const Base: React.FC<Props> = ({ className, baseUrl }) => {
  const rankMenu = rank.rank.map((elm, index) => (
      <Link href={`/${baseUrl}/${elm.name}`} key={index}>
        <div className={`${className}__rankList`}>
          <img
            src={`/rank/${elm.key}.png`}
            alt={elm.name}
            className={`${className}__rankPng`}
          />
          <a className={`${className}__rankWord`}>{elm.name}</a>
        </div>
      </Link>
    ));
  return <>{rankMenu}</>;
};

const RankMenu = styled(Base)`
  &__rankPng {
    height: 24px;
    width: 23px;
    margin: 4px 2px 0px 3px;
  }
  &__rankWord {
    margin-top: 5px;
    margin-left: 2px;
  }
  &__rankList {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-weight: bold;
    height: 32px;
    width: 149px;
    border-radius: 10px;
    color: #ffffff;
    background-color: #5987cd;
    margin-bottom: 5px;
  }
`;

export default RankMenu;
