import Header from 'components/header/header';
import PageTitle from 'components/header/pageTitle';
import SideMenu from 'components/header/sidemenu';
import React from 'react';
import styled from 'styled-components';

type Props = {
  page: string;
  className?: string;
};

const Base: React.FC<Props> = ({ page, children, className }) => {
  return (
    <div className={`${className}`}>
      <Header />
      <div className={`${className}__wrapper`}>
        <SideMenu />
        <div className={`${className}__main`}>
          <PageTitle page={page} />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

const Layout = styled(Base)`
  height: 100%;
  background-color: #585755;
  &__wrapper {
    height: 100%;
    display: flex;
  }
  &__main {
    width: 89vw;
    overflow: hidden;
  }
`;

export default Layout;
