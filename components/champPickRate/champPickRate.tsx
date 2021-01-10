import Header from 'components/header/header';
import SideMenu from 'components/header/sidemenu';
import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  page: string;
  rank: string;
};

const Base: React.FC<Props> = ({ className, page, children, rank }) => {
  return (
    <div className={`${className}`}>
      <Header />
      <div className={`${className}__wrapper`}>
        <SideMenu />
      </div>
      <div>
        champPickだよ
        <main>{children}</main>
      </div>
    </div>
  );
};

const Layout = styled(Base)`
  height: 100%;
  overflow: hidden;
  background-color: #585755;
  &__wrapper {
    display: flex;
  }
`;

export default Layout;
