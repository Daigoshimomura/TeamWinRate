import WinList from 'components/winRate/winList';
import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  rank: string;
};

const Base: React.FC<Props> = ({ className, rank }) => {
  return (
    <div className={`${className}__mainElement`}>
      <div className={`${className}__itemList`}>
        <div className={`${className}__teamType`}>Team Type</div>
        <div className={`${className}__symergies`}>Synergies</div>
        <div className={`${className}__champions`}>Champions</div>
        <div className={`${className}__1st`}>1st</div>
        <div className={`${className}__4th`}>4th</div>
      </div>
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
    </div>
  );
};

const WinRate = styled(Base)`
  height: 100%;
  background-color: #585755;
  &__mainElement {
    margin: 30px 5px 0px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__itemList {
    display: flex;
    color: #b2b2b2;
    border-bottom: 1px solid;
  }
  &__teamType {
    min-width: 150px;
  }
  &__symergies {
    min-width: 450px;
  }
  &__champions {
    min-width: 500px;
  }
  &__1st {
    min-width: 65px;
  }
  &__4th {
    min-width: 65px;
  }
`;

export default WinRate;
