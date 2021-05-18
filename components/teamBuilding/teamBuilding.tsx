import Building from 'components/teamBuilding/building';
import MyTeam from 'components/teamBuilding/myTeam';
import Pool from 'components/teamBuilding/pool';
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

export type TeamType = {
  teamName: string;
  championList: Map<string, string>;
};

//MyTeamサイドボタン押下時のType
export type SideButtonType = {
  teamList: TeamType;
  teamListIndex: number;
  buttonLable: string;
};

const Base: React.FC<Props> = ({ className }) => {
  //MyTeam_チーム出力用
  const [myTeamsList, setMyTeamList] = useState<TeamType[]>([]);
  //Building_SaveClick,MyTeam_deleteClick
  const updateMyTeamList = useCallback(
    (myTeam: TeamType) => {
      setMyTeamList((prevState) => {
        return [...prevState, myTeam];
      });
    },
    [myTeamsList]
  );

  //MyTeam_deleteClick
  const deleteMyTeamList = useCallback(
    (TeamList: TeamType[]) => {
      console.log('delte', TeamList);
      setMyTeamList(TeamList);
      console.log('myTeamsList', myTeamsList);
    },
    [myTeamsList]
  );

  //MyTeam_削除チーム認識用
  const [drapTopTeam, setDrapTopTeam] = useState<number | undefined>(undefined);
  const [drapUnderTeam, setDrapUnderTeam] = useState<number | undefined>(
    undefined
  );
  //Building_上部Bordドロップ認識
  const fetchDrapTop = useCallback(
    (index?: number) => {
      setDrapTopTeam(index);
    },
    [setDrapTopTeam]
  );
  //Building_下部Bordドロップ認識
  const fetchDrapUnder = useCallback(
    (index?: number) => {
      setDrapUnderTeam(index);
    },
    [setDrapUnderTeam]
  );

  //Building_myTeamsideButton処理用
  const [myTeamSideClick, setMyTeamSideClick] = useState<
    SideButtonType | undefined
  >();
  //MyTeam_SideButtonClickType
  const distinguish_button = (type: SideButtonType) => {
    setMyTeamSideClick(type);
  };

  return (
    <div className={`${className}__mainElement`}>
      <div className={`${className}__mainSection`}>
        <div className={`${className}__building`}>
          <div className={`${className}__topTeam`}>
            <Building
              type={'UP'}
              updateMyTeamList={updateMyTeamList}
              fetchDrap={fetchDrapTop}
              myTeamSideClick={myTeamSideClick}
            />
          </div>
          <div className={`${className}__underTeam`}>
            <Building
              type={'UNDER'}
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
            distinguish_button={distinguish_button}
            deleteMyTeamList={deleteMyTeamList}
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
