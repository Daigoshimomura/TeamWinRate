import { TeamList } from 'components/teamBuilding/building';
import { chooseColor } from 'components/teamBuilding/pool';
import champions from 'public/json/champions.json';
import React from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

type Props = {
  className?: string;
  myTeamsList: TeamList[];
  dragSelectTeam: (dragTeam: TeamList, index: number) => void;
};

const Base: React.FC<Props> = ({ className, myTeamsList, dragSelectTeam }) => {
  // cost返却処理該当しない場合は0を返却
  const fetchCost = (championId: string): number => {
    const selectChampionId = champions.find((elm) => {
      return elm.championId === championId;
    });
    if (selectChampionId) {
      return selectChampionId.cost;
    }
    return 0;
  };

  //アルファベット順かつコスト順に並べ替えした出力用リスト
  const outputMyTeamList = (championList: Map<string, string>) => {
    const newMyTeamList: string[] = [];
    championList.forEach((innerElm) => {
      newMyTeamList.push(innerElm);
    });
    newMyTeamList.sort();
    newMyTeamList.sort((a, b) => {
      return fetchCost(b) - fetchCost(a);
    });
    return newMyTeamList;
  };

  //myteamドラッグのref
  const dragMyTeam = (index: number) => {
    const [, ref] = useDrag({
      item: { type: 'team', index },
    });
    return ref;
  };

  const teamList = () => {
    //champion出力処理
    const team: JSX.Element[] = [];
    myTeamsList.forEach((element, index) => {
      const outputChampionList: JSX.Element[] = [];
      dragSelectTeam(element, index);
      const newMyTeamList = outputMyTeamList(element.championList);
      newMyTeamList.forEach((item) => {
        const color = fetchCost(item);
        outputChampionList.push(
          <ChampionImage src={`/champions/${item}.png`} color={`${color}`} />
        );
      });
      const refDrag = dragMyTeam(index);
      team.push(
        <div key={index} ref={refDrag} className={`${className}__team`}>
          <div className={`${className}__teamName`}>{element.teamName}</div>
          <div className={`${className}__champions`}>{outputChampionList}</div>
        </div>
      );
    });
    return team;
  };
  return (
    <div>
      <div className={`${className}`}>
        <div className={`${className}__header`}>My Teams</div>
        <div className={`${className}__teamList`}>{teamList()}</div>
      </div>
      <div className={`${className}__pageButtonList`}>
        <button className={`${className}__notSelectedButton`}>1</button>
        <button className={`${className}__openButton`}>2</button>
        <button className={`${className}__activeButton`}>3</button>
      </div>
    </div>
  );
};

const ChampionImage = styled.img`
  height: 42px;
  width: 40px;
  border-radius: 6px;
  margin-right: 4px;
  border: 2px solid ${(props) => chooseColor(props.color)};
`;

const MyTeam = styled(Base)`
  background-color: #656565;
  border-radius: 6px;
  height: 600px;
  padding: 4px 9px 0 10px;
  &__header {
    color: #b3b3b3;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 14px;
  }
  &__team {
    width: 474px;
    height: 95px;
    background-color: #7b7b7b;
    border-radius: 6px;
    margin-bottom: 4px;
  }
  &__teamName {
    color: #e6e8ed;
    font-size: 18px;
    border-bottom: 1px solid #e6e8ed;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 4px 19px 0 19px;
  }
  &__champions {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 14px 0 0 19px;
  }
  &__pageButtonList {
    color: #b2b2b2;
    font-size: 18px;
    margin: 6px 0 0 5px;
  }
  &__notSelectedButton {
    width: 60px;
    height: 30px;
    margin-right: 6px;
  }
  &__openButton {
    width: 60px;
    height: 30px;
    border-radius: 0px 0px 6px 6px;
    background-color: #656565;
    color: #e6e8ed;
    margin-right: 6px;
  }
  &__activeButton {
    width: 60px;
    height: 30px;
    border-radius: 0px 0px 6px 6px;
    background-color: #5987cd;
    color: #ffffff;
    margin-right: 6px;
  }
`;

export default MyTeam;
