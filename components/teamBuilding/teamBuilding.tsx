import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}__mainElement`}>
      <div className={`${className}__mainSection`}>
        <div className={`${className}__building`}>
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
    margin-top: 10px;
  }
  &__mainSection {
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
  }
  &__building {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }
  &__topTeam {
    height: 315px;
    width: 695px;
    background: #656565;
    margin-bottom: 5px;
  }
  &__underTeam {
    height: 315px;
    width: 695px;
    background: #656565;
  }
  &__teamList {
    height: 635px;
    width: 495px;
    background: #656565;
  }
  &__poolSection {
    height: 315px;
    width: 1200px;
    background: #656565;
  }
`;

export default TeamBuilding;
