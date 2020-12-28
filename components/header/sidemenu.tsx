import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import rank from '../../public/json/rank.json';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  //WinRateflag
  const [isWinOpen, setIsWinOpen] = useState(false);
  //ChampPickflag
  const [isChampOpen, setIsChampOpen] = useState(false);
  //rank一覧
  const champRankList = rank.rank.map((elm, index) => {
    return (
      <Link href={`/champPickRate/${elm.name}`} key={index}>
        <li className={`${className}__rankList`}>
          <img
            src={`rank/${elm.key}.png`}
            alt={elm.name}
            className={`${className}__rankPng`}
          />
          <a className={`${className}__rankWord`}>{elm.name}</a>
        </li>
      </Link>
    );
  });
  const teamRankList = rank.rank.map((elm, index) => {
    return (
      <Link href={`/teamBuilding/${elm.name}`} key={index}>
        <li className={`${className}__rankList`}>
          <img
            src={`rank/${elm.key}.png`}
            alt={elm.name}
            className={`${className}__rankPng`}
          />
          <a className={`${className}__rankWord`}>{elm.name}</a>
        </li>
      </Link>
    );
  });

  return (
    <div className={`${className}`}>
      <div className={`${className}__menu`}>
        <div className={`${className}__flame`}>
          <Link href={`/`}>
            <a className={`${className}__menuButton`}>Home</a>
          </Link>
        </div>
        <div className={`${className}__flame`}>
          <Link href={`/`}>
            <a className={`${className}__menuButton`}>Team Building</a>
          </Link>
        </div>
        <div className={`${className}__flame`}>
          <div
            className={`${className}__menuButton`}
            onClick={() => {
              setIsWinOpen(!isWinOpen);
            }}
          >
            Win Rate
            {isWinOpen ? (
              <img
                className={`${className}__arrow`}
                src={`/button/arrow-up16.png`}
              />
            ) : (
              <img
                className={`${className}__arrow`}
                src={`/button/arrow-down16.png`}
              />
            )}
          </div>
        </div>
        {isWinOpen ? (
          <ul className={`${className}__flameList`}>{teamRankList}</ul>
        ) : null}
        <div className={`${className}__flame`}>
          <div
            className={`${className}__menuButton`}
            onClick={() => {
              setIsChampOpen(!isChampOpen);
            }}
          >
            Champ Pick Rate
            {isChampOpen ? (
              <img
                className={`${className}__arrow`}
                src={`/button/arrow-up16.png`}
              />
            ) : (
              <img
                className={`${className}__arrow`}
                src={`/button/arrow-down16.png`}
              />
            )}
          </div>
        </div>
        {isChampOpen ? (
          <ul className={`${className}__flameList`}>{champRankList}</ul>
        ) : null}
      </div>
    </div>
  );
};

const Header = styled(Base)`
  height: 100vh;
  width: 11%;
  position: relative;
  border-right: 1px solid;
  border-color: #8c8c8c;
  &__menu {
    margin-top: 86px;
    margin-left: 19px;
    margin-right: 6px;
  }
  &__flame {
    height: 32px;
    margin-bottom: 10px;
    border-bottom: 1px solid;
    border-color: #8c8c8c;
  }
  &__menuButton {
    font-size: 18px;
    color: #b2b2b2;
    text-decoration: none;
    position: relative;
    transition: 0.1s;
    cursor: pointer;
    ::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      content: '';
      width: 0;
      height: 2px;
      background-color: #b2b2b2;
      transition: 0.3s;
      transform: translateX(-50%);
    }
    :hover::after {
      width: 100%;
    }
  }
  &__flameList {
    list-style: none;
    margin-top: 5px;
    margin-left: 13px;
  }
  &__arrow {
    float: right;
    margin: 2px 3px 0 0;
  }
  &__rankPng {
    height: 24px;
    width: 23px;
    margin: 4px 2px 0px 3px;
  }
  &__rankWord {
    margin-bottom: 5px;
  }
  &__rankList {
    display: block;
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

export default Header;
