import Button from 'components/teamBuilding/building_button';
import Pentagon from 'components/teamBuilding/pentagon';
import { TeamType, SideButtonType } from 'components/teamBuilding/teamBuilding';
import { DeliveryTeam } from 'components/teamBuilding/myTeam_singleTeam';
import Traits from 'components/teamBuilding/traitsList';
import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { ChampionInfo, fetchChampionFindName } from 'util_chamipon';

type Props = {
  className?: string;
  updateMyTeamList: (myTeam: TeamType) => void;
  fetchDrap: (index?: number) => void;
  myTeamsList: TeamType[];
  myTeamSideClick?: SideButtonType;
  type: string;
};

const Base: React.FC<Props> = ({
  className,
  updateMyTeamList,
  fetchDrap,
  myTeamsList,
  myTeamSideClick,
  type,
}) => {
  //ボード上List位置
  const [boadPosition, setBoadPosition] = useState<Map<string, string>>(
    new Map()
  );

  //特性の出力
  const [championList, setChampionList] = useState<string[]>([]);

  //画面上のTeamName取得
  const [teamName, setTeamName] = useState<string>('');

  //bulidingにあるchampionがpoolにドラッグされたときの処理
  const movePool = (position: string) => {
    const index = championList.findIndex(
      (item) => item === boadPosition.get(position)
    );
    championList.splice(index, 1);
    setChampionList(championList);
    boadPosition.delete(position);
    setBoadPosition(new Map(boadPosition.entries()));
  };

  //poolからのドロップ処理
  const moveChampion = (monitor: string | symbol, position: string) => {
    const selectChampion: ChampionInfo = fetchChampionFindName(
      monitor as string
    );
    setBoadPosition(
      new Map(boadPosition.set(position, selectChampion.championId).entries())
    );
    setChampionList((prevState) => {
      return [...prevState, selectChampion.championId];
    });
  };

  //saveボタン処理
  const saveClick = () => {
    if (teamName) {
      const myTeam: TeamType = {
        teamName: teamName,
        championList: boadPosition,
      };
      updateMyTeamList(myTeam);
    } else {
      alert('TeamNameを入力してください。');
    }
  };

  //newボタン処理
  const newClick = () => {
    setBoadPosition(new Map());
    setChampionList([]);
    setTeamName('');
    fetchDrap(undefined);
  };

  //MyTeamsからbordへのドロップのref
  const [, ref] = useDrop({
    accept: 'team',
    drop: (item, monitor) => {
      const DropTeam: DeliveryTeam = monitor.getItem();
      bordDrop(DropTeam.myTeam, DropTeam.index);
    },
  });

  //MyTeamsからbordへのドロップ処理
  const bordDrop = (myTeam: TeamType, index?: number) => {
    if (myTeam.championList && myTeam.teamName) {
      setBoadPosition(myTeam.championList);
      setTeamName(myTeam.teamName);
      //ドロップされたchampionセット
      const newChampionList: string[] = [];
      myTeam.championList?.forEach((elm) => {
        newChampionList.push(elm);
      });
      setChampionList(newChampionList);
      fetchDrap(index);
    }
  };

  //MyTeamSideButton検知用
  useEffect(() => {
    if (
      type === myTeamSideClick?.buttonLable &&
      myTeamSideClick?.teamList != undefined
    ) {
      bordDrop(myTeamSideClick.teamList, myTeamSideClick.teamListIndex);
    }
  }, [myTeamSideClick]);

  return (
    <div className={`${className}`} ref={ref}>
      <div className={`${className}__header`}>
        <input
          type="text"
          className={`${className}__teamName`}
          placeholder="TeamName"
          value={teamName}
          onChange={(e) => {
            setTeamName(e.target.value);
          }}
        />
        <div className={`${className}__buttonList`}>
          <Button type="Save" onClick={saveClick} />
          <Button type="New" onClick={newClick} />
        </div>
      </div>
      <div className={`${className}__build`}>
        <div className={`${className}__traitsList`}>
          <Traits championList={championList} />
        </div>
        <div className={`${className}__placementPlace`}>
          <div className={`${className}__pentagonGrayListUp`}>
            <Pentagon
              color={'gray'}
              id={'1'}
              boadPosition={boadPosition}
              moveChampion={moveChampion}
              movePool={movePool}
            />
          </div>
          <div className={`${className}__pentagonWhiteList`}>
            <Pentagon
              color={'white'}
              id={'2'}
              boadPosition={boadPosition}
              moveChampion={moveChampion}
              movePool={movePool}
            />
          </div>
          <div className={`${className}__pentagonGrayListDown`}>
            <Pentagon
              color={'gray'}
              id={'3'}
              boadPosition={boadPosition}
              moveChampion={moveChampion}
              movePool={movePool}
            />
          </div>
          <div className={`${className}__pentagonWhiteList`}>
            <Pentagon
              color={'white'}
              id={'4'}
              boadPosition={boadPosition}
              moveChampion={moveChampion}
              movePool={movePool}
            />
          </div>
          <div className={`${className}__boad`}>Comparison Boad</div>
        </div>
      </div>
    </div>
  );
};

const Building = styled(Base)`
  display: flex;
  flex-direction: column;
  padding: 6px 10px 3px 22px;
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  &__teamName {
    max-width: 445px;
    font-size: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #e6e8ed;
    margin-top: 13px;
  }
  &__buttonList {
    width: 124px;
    font-size: 14px;
    color: #e6e8ed;
    display: flex;
    justify-content: space-between;
  }
  &__build {
    height: 215px;
    display: flex;
    flex-direction: row;
  }
  &__traitsList {
    display: flex;
    flex-wrap: wrap;
    width: 216px;
    height: 215px;
    overflow: hidden;
  }
  &__placementPlace {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 423px;
    margin-left: 24px;
  }
  &__pentagonGrayListUp {
    display: flex;
    flex-direction: row;
    margin-bottom: -14px;
  }
  &__pentagonGrayListDown {
    display: flex;
    flex-direction: row;
    margin-top: -14px;
    margin-bottom: -14px;
  }
  &__pentagonWhiteList {
    display: flex;
    flex-direction: row;
    margin-left: 28px;
  }
  &__pentagonImg {
    width: 54;
    height: 62px;
    margin-right: 2px;
  }
  &__boad {
    color: #b2b2b2;
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 0 auto;
  }
  &__hexagon {
    position: relative;
    width: 53px;
    overflow: hidden;
    margin-right: 3px;
  }
  &__hexagon::before {
    display: block;
    padding-top: 115.4700538%;
    content: '';
  }
  &__hexagon__inner-1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: rotate(60deg);
  }
  &__hexagon__inner-2 {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: rotate(60deg);
  }
  &__hexagon__inner-3 {
    width: 100%;
    height: 100%;
    transform: rotate(-120deg);
  }
  &__hexagon__inner-image {
    width: 100%;
    height: 100%;
  }
`;

export default Building;
