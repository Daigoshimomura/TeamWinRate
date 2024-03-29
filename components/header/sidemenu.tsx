import RankMenu from 'components/header/rankMenu';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  // WinRateflag
  const [isWinOpen, setIsWinOpen] = useState(false);
  // ChampPickflag
  const [isChampOpen, setIsChampOpen] = useState(false);
  return (
    <div className={`${className}`}>
      <div className={`${className}__menu`}>
        <div className={`${className}__flame`}>
          <Link href="/">
            <a className={`${className}__menuButton`}>Home</a>
          </Link>
        </div>
        <div className={`${className}__flame`}>
          <Link href="/teamBuilding/teamBuilding">
            <a className={`${className}__menuButton`}>Team Building</a>
          </Link>
        </div>
        <div className={`${className}__flame`}>
          <button
            type="button"
            className={`${className}__menuButton`}
            onClick={() => {
              setIsWinOpen(!isWinOpen);
            }}
          >
            Win Rate
            {isWinOpen ? (
              <img
                className={`${className}__arrow`}
                src="/button/arrow-up16.png"
                alt="arrow"
              />
            ) : (
              <img
                className={`${className}__arrow`}
                src="/button/arrow-down16.png"
                alt="arrow"
              />
            )}
          </button>
        </div>
        {isWinOpen ? (
          <div className={`${className}__flameList`}>
            <RankMenu baseUrl="winRate" />
          </div>
        ) : null}
        <div className={`${className}__flame`}>
          <button
            type="button"
            className={`${className}__menuButton`}
            onClick={() => {
              setIsChampOpen(!isChampOpen);
            }}
          >
            Champ Pick Rate
            {isChampOpen ? (
              <img
                className={`${className}__arrow`}
                src="/button/arrow-up16.png"
                alt="arrow"
              />
            ) : (
              <img
                className={`${className}__arrow`}
                src="/button/arrow-down16.png"
                alt="arrow"
              />
            )}
          </button>
        </div>
        {isChampOpen ? (
          <div className={`${className}__flameList`}>
            <RankMenu baseUrl="champPickRate" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

const Header = styled(Base)`
  height: 100vh;
  position: relative;
  border-right: 1px solid;
  border-color: #8c8c8c;
  width: 11vw;
  min-width: 200px;
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`;

export default Header;
