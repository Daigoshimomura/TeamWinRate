import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { MenuButton } from '../button/menu';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className={`${className}__menu`}>
        <div className={`${className}__flame`}>
          <Link href={`/`}>
            <MenuButton className={`${className}__buttom`}>Home</MenuButton>
          </Link>
        </div>
        <div className={`${className}__flame`}>
          <Link href={`/`}>
            <MenuButton className={`${className}__buttom`}>
              Team Building
            </MenuButton>
          </Link>
        </div>
        <div className={`${className}__flame`}>
          <div>
            <MenuButton className={`${className}__buttom`}>Win Rate</MenuButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = styled(Base)`
  height: 1440px;
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
    height: 30px;
    margin-bottom: 10px;
    border-bottom: 1px solid;
    border-color: #8c8c8c;
  }
`;

export default Header;
