import SingleTeam from 'components/teamBuilding/myTeam_singleTeam';
import Pagination from 'components/teamBuilding/pagination';
import { chooseColor } from 'components/teamBuilding/pool';
import { TeamType, SideButtonType } from 'components/teamBuilding/teamBuilding';
import React, { useState } from 'react';
import styled from 'styled-components';
import { fetchChampionFindId } from 'util_chamipon';

type Props = {
  className?: string;
  myTeamsList: TeamType[];
  drapTopTeam?: number;
  drapUnderTeam?: number;
  distinguishbutton: (type: SideButtonType) => void;
  deleteMyTeamList: (myTeam: TeamType[], id?: string) => void;
};

const Base: React.FC<Props> = ({
  className,
  myTeamsList,
  drapTopTeam,
  drapUnderTeam,
  distinguishbutton,
  deleteMyTeamList,
}) => {
  // 表示しているページ番号
  const [handlePaginate, setHandlePaginate] = useState<number>(0);

  //アルファベット順かつコスト順に並べ替えした出力用リスト
  const outputMyTeamList = (championList: Map<string, string>) => {
    const newMyTeamList: string[] = [];
    championList.forEach((innerElm) => {
      newMyTeamList.push(innerElm);
    });
    newMyTeamList.sort();
    //championコスト順に並び替え
    newMyTeamList.sort((a, b) => {
      return fetchChampionFindId(b).cost - fetchChampionFindId(a).cost;
    });
    return newMyTeamList;
  };

  //paginationでページを変更したときに画面表示の処理
  const handleSearchMyteam = (page: number) => {
    //ページ番号とList番号の合計
    let newPage;
    if (0 <= page) {
      newPage = (page - 1) * 5;
    } else {
      newPage = 0;
    }
    setHandlePaginate(newPage);
  };

  //sidebuttonクリック処理
  const sideButtonOnclick = (type: string, Index: number) => {
    //Removeボタン押下時
    if ('REMOVE' === type) {
      const newMyTeamList: TeamType[] = [...myTeamsList];
      const deleTeam = newMyTeamList[Index];
      newMyTeamList.splice(Index, 1);
      deleteMyTeamList(newMyTeamList, deleTeam.id);
    } else if ('UP' === type || 'UNDER' === type) {
      distinguishbutton({
        teamList: myTeamsList[Index],
        teamListIndex: Index,
        buttonLable: type,
      });
    }
  };

  const teamList = () => {
    //champion出力処理
    const result: JSX.Element[] = [];
    for (let index = 0; index < 5; index++) {
      const outputChampionList: JSX.Element[] = [];
      const newIndex: number = index + handlePaginate;
      if (myTeamsList[newIndex]) {
        const newMyTeamList = outputMyTeamList(
          myTeamsList[newIndex].championList
        );
        newMyTeamList.forEach((item) => {
          const color: number = fetchChampionFindId(item).cost;
          outputChampionList.push(
            <ChampionImage src={`/champions/${item}.png`} color={`${color}`} />
          );
        });
        result.push(
          <SingleTeam
            myTeamsList={myTeamsList}
            drapTopTeam={drapTopTeam}
            drapUnderTeam={drapUnderTeam}
            myTeamIndex={newIndex}
            sideButtonOnclick={sideButtonOnclick}
            outputChampionList={outputChampionList}
          />
        );
      }
    }
    return result;
  };

  return (
    <div>
      <div className={`${className}`}>
        <div className={`${className}__header`}>My Teams</div>
        <div className={`${className}__teamList`}>{teamList()}</div>
      </div>
      <Pagination
        myTeamSize={myTeamsList.length}
        handleSearchMyteam={handleSearchMyteam}
      />
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
  &__sidemenu {
    width: 72px;
    height: 93px;
    font-size: 14px;
    z-index: 2;
    padding-left: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    margin-top: -5px;
    margin-left: 390px;
    color: #e6e8ed;
    background-color: #7b7b7b;
    border: 1px solid #585755;
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    opacity: 0.95;
  }
  &__sideButton {
    padding-bottom: 2px;
    border-bottom: 1px solid;
    border-color: #656565;
  }
`;

export default MyTeam;
