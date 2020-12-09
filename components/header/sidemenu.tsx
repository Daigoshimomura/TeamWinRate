import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MenuButton, Menu, RankList } from '../button/menu';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  //WinRateflag
  const [isWinOpen, setIsWinOpen] = useState(false);

  return (
    <div className={`${className}`}>
      <div className={`${className}__menu`}>
        <div className={`${className}__flame`}>
          <Link href={`/`}>
            <MenuButton>Home</MenuButton>
          </Link>
        </div>
        <div className={`${className}__flame`}>
          <Link href={`/`}>
            <MenuButton>Team Building</MenuButton>
          </Link>
        </div>
        <div className={`${className}__flame`}>
          <Menu
            onClick={() => {
              setIsWinOpen(!isWinOpen);
            }}
          >
            Win Rate
            <img
              className={`${className}__arrow`}
              src={`/button/arrow-down.png`}
            />
          </Menu>
        </div>
        {isWinOpen ? (
          <ul className={`${className}__flameList`}>
            <RankList>
              <a>Challenger</a>
            </RankList>
          </ul>
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
  &__flameList {
    list-style: none;
    margin-top: 5px;
    margin-left: 13px;
  }
  &__arrow {
    margin-left: 82px;
  }
`;

export default Header;
