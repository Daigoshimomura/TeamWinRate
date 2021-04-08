import Building from 'components/teamBuilding/building';
import { TeamList } from 'components/teamBuilding/building';
import MyTeam from 'components/teamBuilding/myTeam';
import Pool from 'components/teamBuilding/pool';
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  //myTeams出力用
  const [myTeamsList, setMyTeamList] = useState<TeamList[]>([]);
  const updateMyTeamList = (Myteam: TeamList) => {
    console.log('myTeamsList', myTeamsList);
    console.log('Myteam', Myteam);
    const newMyTeamList: TeamList[] = [...myTeamsList, Myteam];
    setMyTeamList(newMyTeamList);
  };

  return (
    <div className={`${className}__mainElement`}>
      <DndProvider backend={HTML5Backend}>
        <div className={`${className}__mainSection`}>
          <div className={`${className}__building`}>
            <div className={`${className}__topTeam`}>
              <Building updateMyTeamList={updateMyTeamList} />
            </div>
            <div className={`${className}__underTeam`}>
              <Building updateMyTeamList={updateMyTeamList} />
            </div>
          </div>
          <div className={`${className}__teamList`}>
            <MyTeam myTeamsList={myTeamsList} />
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
