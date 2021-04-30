import Building from 'components/teamBuilding/building';
import { TeamList } from 'components/teamBuilding/building';
import MyTeam from 'components/teamBuilding/myTeam';
import Pool from 'components/teamBuilding/pool';
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};


export type FetchSideButton = {
  teamList : TeamList;
  teamListIndex : number;
  buttonLable : String;
};

const Base: React.FC<Props> = ({ className }) => {
  //saveクリック時にmyTeam追加
  const [myTeamsList, setMyTeamList] = useState<TeamList[]>([]);
  const updateMyTeamList = useCallback(
    (myTeam: TeamList) => {
      setMyTeamList((prevState) => {
        return [...prevState, myTeam];
      });
    },
    [setMyTeamList]
  );

  //削除したteam認識用
  const [drapTopTeam, setDrapTopTeam] = useState<number | undefined>(undefined);
  const [drapUnderTeam, setDrapUnderTeam] = useState<number | undefined>(
    undefined
  );
  const fetchDrapTop = useCallback(
    (index: number | undefined) => {
      setDrapTopTeam(index);
    },
    [setDrapTopTeam]
  );
  const fetchDrapUnder = useCallback(
    (index: number | undefined) => {
      setDrapUnderTeam(index);
    },
    [setDrapUnderTeam]
  );

//myTeamsideButton処理用
  const [myTeamSideClick, setMyTeamSideClick] = useState<FetchSideButton | undefined>();
  const fetchButton = (type:FetchSideButton) => {
    setMyTeamSideClick(type);
  }

  return (
    <div className={`${className}__mainElement`}>
      <div className={`${className}__mainSection`}>
        <div className={`${className}__building`}>
          <div className={`${className}__topTeam`}>
            <Building
              key={"UP"}
              updateMyTeamList={updateMyTeamList}
              fetchDrap={fetchDrapTop}
              myTeamSideClick={myTeamSideClick}
            />
          </div>
          <div className={`${className}__underTeam`}>
            <Building
              key={"UNDER"}
              updateMyTeamList={updateMyTeamList}
              fetchDrap={fetchDrapUnder}
              myTeamSideClick={myTeamSideClick}
            />
          </div>
        </div>
        <div className={`${className}__teamList`}>
          <MyTeam
            myTeamsList={myTeamsList}
            drapTopTeam={drapTopTeam}
            drapUnderTeam={drapUnderTeam}
            fetchButton={fetchButton}
          />
        </div>
      </div>
      <div className={`${className}__poolSection`}>
        <Pool />
      </div>
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
