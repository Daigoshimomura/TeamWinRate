import Building from 'components/teamBuilding/building';
import MyTeam from 'components/teamBuilding/myTeam';
import Pool from 'components/teamBuilding/pool';
import firebase from 'firebase';
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  user: firebase.User | null | undefined;
  className?: string;
};

export type TeamType = {
  id?: string;
  index?: number;
  teamName?: string;
  championList: Map<string, string>;
};

// MyTeamサイドボタン押下時のType
export type SideButtonType = {
  teamList: TeamType;
  teamListIndex: number;
  buttonLable: string;
};

export type DbInfo = {
  id: string;
  teamInfo: {
    championList: string;
    index: string;
    teamName: string;
  };
};

const Base: React.FC<Props> = ({ className, user }) => {
  // api取得
  const userID = user?.uid;
  // MyTeam_チーム出力用
  const [myTeamsList, setMyTeamList] = useState<TeamType[]>([]);

  // 画面遷移時の表示処理
  useEffect(() => {
    const callBack = async () => {
      const result = await getDBdata();
      const dbDataTeamList: TeamType[] = result.map((elm: DbInfo) => {
        const dBdata = parseDBData(elm);
        const userMap = new Map<string, string>();
        userMap.set(dBdata.position, dBdata.champion);
        return {
          id: dBdata.id,
          teamName: dBdata.Name,
          championList: userMap,
        };
      });
      setMyTeamList(dbDataTeamList);
    };
    callBack();
  }, []);

  // データ整形
  const parseDBData = (championData: DbInfo) => {
    const teamWd = championData.teamInfo.teamName.slice(1, -1);
    const partitionWd = championData.teamInfo.championList.split('"');
    return {
      id: championData.id,
      Name: teamWd,
      position: partitionWd[1],
      champion: partitionWd[3],
    };
  };

  // data取得
  const getDBdata = async () => {
    const url = `/api/teams/?id=${userID}`;
    const getData = await fetch(url, {
      method: 'get',
    });
    const result = JSON.parse(JSON.stringify(await getData.json()));
    return result;
  };

  // Building_SaveClick
  const updateMyTeamList = useCallback(
    async (myTeam: TeamType) => {
      // useStateとDBに渡すための値。
      const newMyTeamList: TeamType[] = [...myTeamsList, myTeam];
      setMyTeamList(newMyTeamList);
      if (myTeam.championList) {
        const postData = {
          index: JSON.stringify(newMyTeamList.length - 1),
          teamName: JSON.stringify(myTeam.teamName),
          championList: JSON.stringify(Object.fromEntries(myTeam.championList)),
        };
        const url = `/api/teams/?id=${userID}`;
        await fetch(url, {
          method: 'post',
          body: JSON.stringify(postData),
        });
      }
    },
    [myTeamsList]
  );

  // MyTeam_deleteClick
  const deleteMyTeamList = useCallback(
    async (TeamList: TeamType[], id?: string) => {
      setMyTeamList(TeamList);
      // deleteのときに呼び出される処理
      const postData = {
        id,
        action: 'delete',
      };
      const url = `/api/teams/?id=${userID}`;
      await fetch(url, {
        method: 'post',
        body: JSON.stringify(postData),
      });
    },
    [myTeamsList]
  );

  // MyTeam_削除チーム認識用
  const [drapTopTeam, setDrapTopTeam] = useState<number | undefined>(undefined);
  const [drapUnderTeam, setDrapUnderTeam] = useState<number | undefined>(
    undefined
  );
  // Building_上部Bordドロップ認識
  const fetchDrapTop = useCallback(
    (index?: number) => {
      setDrapTopTeam(index);
    },
    [setDrapTopTeam]
  );
  // Building_下部Bordドロップ認識
  const fetchDrapUnder = useCallback(
    (index?: number) => {
      setDrapUnderTeam(index);
    },
    [setDrapUnderTeam]
  );

  // Building_myTeamsideButton処理用
  const [myTeamSideClick, setMyTeamSideClick] = useState<
    SideButtonType | undefined
  >();
  // MyTeam_SideButtonClickType
  const distinguish_button = (type: SideButtonType) => {
    setMyTeamSideClick(type);
  };

  return (
    <div className={`${className}__mainElement`}>
      <div className={`${className}__mainSection`}>
        <div className={`${className}__building`}>
          <div className={`${className}__topTeam`}>
            <Building
              type="UP"
              updateMyTeamList={updateMyTeamList}
              fetchDrap={fetchDrapTop}
              myTeamSideClick={myTeamSideClick}
            />
          </div>
          <div className={`${className}__underTeam`}>
            <Building
              type="UNDER"
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
            distinguishbutton={distinguish_button}
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
