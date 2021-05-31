import { Breakdown } from 'components/champPickRate/breakdown';
import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}__mainElement`}>
      <div className={`${className}__costSection`}>
        <div className={`${className}__cost`}>Cost 1</div>
        <div className={`${className}__cost`}>Cost 2</div>
        <div className={`${className}__cost`}>Cost 3</div>
        <div className={`${className}__cost`}>Cost 4</div>
        <div className={`${className}__cost`}>Cost 5</div>
      </div>
      <div className={`${className}__mainSection`}>
        <div className={`${className}__circleSection`}></div>
        <Breakdown />
      </div>
    </div>
  );
};

export const ChampPickRate = styled(Base)`
  &__mainElement {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 5px 0px 15px;
  }
  &__costSection {
    width: 1155px;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 10px;
    margin-bottom: 5px;
    color: #b3b3b3;
  }
  &__cost {
    width: 94px;
    height: 44px;
    margin-right: 9px;
    border-radius: 6px 6px 0px 0px;
  }
  &__mainSection {
    width: 1155px;
    height: 595px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #656565;
    border-radius: 6px;
    padding: 60px 26px 50px 78px;
  }
  &__circleSection {
    width: 300px;
    height: 300px;
    background-color: #b3b3b3;
  }
`;
