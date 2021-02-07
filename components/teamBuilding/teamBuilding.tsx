import Building from 'components/teamBuilding/building';
import Pool from 'components/teamBuilding/pool';
import TeamList from 'components/teamBuilding/teamList';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}__mainElement`}>
      <DndProvider backend={HTML5Backend}>
        <div className={`${className}__mainSection`}>
          <div className={`${className}__building`}>
            <div className={`${className}__topTeam`}>
              <Building />
            </div>
            <div className={`${className}__underTeam`}>
              <Building />
            </div>
          </div>
          <div className={`${className}__teamList`}>
            <TeamList />
          </div>
        </div>
        <div className={`${className}__poolSection`}>
          <Pool />
        </div>
      </DndProvider>
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
    border-radius: 6px;
  }
  &__underTeam {
    height: 315px;
    width: 695px;
    background: #656565;
    border-radius: 6px;
  }
  &__teamList {
    height: 635px;
    width: 495px;
  }
  &__poolSection {
    height: 315px;
    width: 1200px;
    background: #656565;
    border-radius: 6px;
    margin-bottom: 10px;
  }
`;

export default TeamBuilding;
