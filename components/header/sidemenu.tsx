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
  //rank一覧
  const rankList = rank.rank.map((elm, index) => {
    return (
      <li key={index} className={`${className}__rankList`}>
        <img
          src={`rank/${elm.key}.png`}
          alt={elm.name}
          className={`${className}__rankPng`}
        />
        <a>{elm.name}</a>
      </li>
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
            className={`${className}__menuList`}
            onClick={() => {
              setIsWinOpen(!isWinOpen);
            }}
          >
            Win Rate
            <img
              className={`${className}__arrow`}
              src={`/button/arrow-down.png`}
            />
          </div>
        </div>
        {isWinOpen ? (
          <ul className={`${className}__flameList`}>{rankList}</ul>
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
    display: inline-block;
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
  &__menuList {
    font-size: 18px;
    color: #b2b2b2;
    text-decoration: none;
    position: relative;
    display: inline-block;
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
    margin-left: 82px;
  }
  &__rankPng {
    height: 20px;
    width: 23px;
  }
  &__rankList {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    height: 32px;
    width: 149px;
    border-radius: 10px;
    color: #ffffff;
    background-color: #5987cd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5px;
  }
`;

export default Header;
