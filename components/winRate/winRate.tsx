import Header from 'components/header/header';
import PageTitle from 'components/header/pageTitleRank';
import SideMenu from 'components/header/sidemenu';
import WinList from 'components/winRate/winList';
import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  page: string;
  rank: string;
};

const Base: React.FC<Props> = ({ className, page, rank }) => {
  return (
    <div className={`${className}`}>
      <Header />
      <div className={`${className}__wrapper`}>
        <SideMenu />
        <div className={`${className}__mainScreen`}>
          <PageTitle page={page} rank={rank} />
          <table className={`${className}__mainElement`}>
            <tr className={`${className}__itemList`}>
              <th className={`${className}__teamType`}>Team Type</th>
              <th className={`${className}__symergies`}>Synergies</th>
              <th className={`${className}__champions`}>Champions</th>
              <th className={`${className}__1th`}>1th</th>
              <th className={`${className}__4th`}>4th</th>
            </tr>
            <WinList rank={rank} />
            <WinList rank={rank} />
            <WinList rank={rank} />
            <WinList rank={rank} />
            <WinList rank={rank} />
            <WinList rank={rank} />
            <WinList rank={rank} />
            <WinList rank={rank} />
            <WinList rank={rank} />
            <WinList rank={rank} />
            <WinList rank={rank} />
            <WinList rank={rank} />
            <WinList rank={rank} />
          </table>
        </div>
      </div>
    </div>
  );
};

const winRate = styled(Base)`
  height: 100%;
  overflow: hidden;
  background-color: #585755;
  &__wrapper {
    display: flex;
  }
  &__mainScreen {
    display: row;
    width: 100%;
    margin: 0;
  }
  &__mainElement {
    margin: 30px 50px 0px 50px;
  }
  &__itemList {
    color: #b2b2b2;
    border-bottom: 1px solid;
  }
  &__teamType {
    padding-right: 50px;
    border-bottom: 1px solid;
  }
  &__symergies {
    padding-right: 550px;
    border-bottom: 1px solid;
  }
  &__champions {
    padding-right: 550px;
    border-bottom: 1px solid;
  }
  &__1th {
    padding-right: 35px;
    border-bottom: 1px solid;
  }
  &__4th {
    padding-right: 35px;
    border-bottom: 1px solid;
  }
`;

export default winRate;
