import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}__mainElement`}>
      <div className={`${className}__mainSection`}>
        <div className={`${className}__buliding`}>
          <div className={`${className}__topTeam`}></div>
          <div className={`${className}__underTeam`}></div>
        </div>
        <div className={`${className}__teamList`}></div>
      </div>
      <div className={`${className}__poolSection`}></div>
    </div>
  );
};

const TeamBuilding = styled(Base)`
  &__mainElement {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__mainSection {
    display: flex;
    flex-direction: row;
  }
  &__building {
    display: flex;
    flex-direction: row;
  }
  &__topTeam {
    height: 315px;
    width: 695px;
    background: #656565;
  }
  &__underTeam {
    height: 315px;
    width: 695px;
    background: #656565;
  }
  &__teamList {
    height: 600px;
    width: 495px;
    background: #656565;
  }
  &__poolSection {
    height: 315px;
    width: 1190px;
    background: #656565;
  }
`;

export default TeamBuilding;
