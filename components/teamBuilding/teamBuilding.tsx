import Building from 'components/teamBuilding/building';
import { TeamList } from 'components/teamBuilding/building';
import MyTeam from 'components/teamBuilding/myTeam';
import Pool from 'components/teamBuilding/pool';
import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  //myTeamsに出力用
  const [myTeamsList, setMyTeamList] = useState<TeamList[]>([]);
  const updateMyTeamList = useCallback(
    (myTeam: TeamList) => {
      setMyTeamList((prevState) => {
        return [...prevState, myTeam];
      });
    },
    [myTeamsList]
  );

  const newTeamList: TeamList = {
    teamName: '',
    championList: new Map(),
  };

  //選択team認識用
  const [selectTeam, setSelectTeam] = useState<TeamList>(newTeamList);
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const dragSelectTeam = useCallback(
    (dragTeam: TeamList, index: number) => {
      setSelectTeam(dragTeam);
      setSelectIndex(index);
    },
    [selectTeam, selectIndex]
  );

  //削除したteam認識用
  const [dragTopTeam, setDragTopTeam] = useState<number | undefined>(undefined);
  const [dragUnderTeam, setDragUnderTeam] = useState<number | undefined>(
    undefined
  );
  const fetchDragTop = useCallback(
    (index: number | undefined) => {
      setDragTopTeam(index);
    },
    [dragTopTeam]
  );
  const fetchDragUnder = useCallback(
    (index: number | undefined) => {
      setDragUnderTeam(index);
    },
    [dragUnderTeam]
  );

  return (
    <div className={`${className}__mainElement`}>
      <DndProvider backend={HTML5Backend}>
        <div className={`${className}__mainSection`}>
          <div className={`${className}__building`}>
            <div className={`${className}__topTeam`}>
              <Building
                updateMyTeamList={updateMyTeamList}
                selectTeam={selectTeam}
                selectIndex={selectIndex}
                fetchDrag={fetchDragTop}
              />
            </div>
            <div className={`${className}__underTeam`}>
              <Building
                updateMyTeamList={updateMyTeamList}
                selectTeam={selectTeam}
                selectIndex={selectIndex}
                fetchDrag={fetchDragUnder}
              />
            </div>
          </div>
          <div className={`${className}__teamList`}>
            <MyTeam
              myTeamsList={myTeamsList}
              dragSelectTeam={dragSelectTeam}
              dragTopTeam={dragTopTeam}
              dragUnderTeam={dragUnderTeam}
            />
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
