import Header from 'components/header/header';
import PageTitle from 'components/header/pagetitle';
import SideMenu from 'components/header/sidemenu';
import React from 'react';
import styled from 'styled-components';
import { sideMain } from 'styles/layout';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      <Header />
      <div className={`${className}__wrapper`}>
        <SideMenu />
        <PageTitle />
      </div>
      <div>
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
