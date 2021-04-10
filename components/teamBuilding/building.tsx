import Traits from 'components/teamBuilding/traitsList';
import champions from 'public/json/champions.json';
import React, { useState } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import styled from 'styled-components';

type Props = {
  className?: string;
  updateMyTeamList: (MyTeam: TeamList) => void;
};

export type TeamList = {
  teamName: string;
  championList: Map<string, string>;
};

const Base: React.FC<Props> = ({ className, updateMyTeamList }) => {
  //ボード上List位置
  const [boadPosition, setBoadPosition] = useState<Map<string, string>>(
    new Map()
  );
  //特性の出力用
  const [championList, setChampionList] = useState<string[]>([]);

  //Team取得用
  const [teamName, setTeamName] = useState<string>('');

  //ドロップ処理
  const moveChampion = (monitor: string | symbol, Position: string) => {
    const IdNumber: number = champions.findIndex(
      (champion) => champion.name === monitor
    );
    setBoadPosition(
      new Map(
        boadPosition.set(Position, champions[IdNumber].championId).entries()
      )
    );
    const newChampionList: string[] = [
      ...championList,
      champions[IdNumber].championId,
    ];
    setChampionList(newChampionList);
  };

  //bulidingにあるchampionがpoolにドラッグされたときの処理
  const movePool = (Position: string) => {
    const index = championList.findIndex(
      (item) => item === boadPosition.get(Position)
    );
    championList.splice(index, 1);
    setChampionList(championList);
    boadPosition.delete(Position);
    setBoadPosition(new Map(boadPosition.entries()));
  };

  //ドラッグ用のtypes
  const types: string[] = champions.map((elm) => {
    return elm.name;
  });

  //ドラッグされたchampionのimgタグ
  const dragChampion = (Position: string) => {
    const [, ref] = useDrag({
      item: { type: 'champion' },
      end: (draggedItem, monitor) => {
        if (monitor.didDrop()) {
          movePool(Position);
        }
      },
    });
    return ref;
  };

  const pentagon = (color: string, id: string) => {
    const pentagon: JSX.Element[] = [];
    for (let i = 0; i < 7; i++) {
      const [, ref] = useDrop({
        accept: types,
        drop: (item) => {
          moveChampion(item.type, `${id}-${i}`);
        },
      });
      //ドラッグされた位置
      const dragPosition = `${id}-${i}`;
      const refDrag = dragChampion(dragPosition);
      const dragChampionImg = () => {
        if (boadPosition.get(dragPosition)) {
          return (
            <div className={`${className}__hexagon`}>
              <div className={`${className}__hexagon__inner-1`}>
                <div className={`${className}__hexagon__inner-2`}>
                  <div className={`${className}__hexagon__inner-3`}>
                    <img
                      className={`${className}__hexagon__inner-image`}
                      ref={refDrag}
                      key={i}
                      src={`/champions/${boadPosition.get(dragPosition)}.png`}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return (
          <img
            ref={ref}
            key={i}
            className={`${className}__pentagonImg`}
            src={`/build/Pentagon-${color}.png`}
          />
        );
      };
      pentagon.push(dragChampionImg());
    }
    return pentagon;
  };

  //saveボタン処理
  const saveClick = () => {
    if (teamName) {
      const myTeam: TeamList = {
        teamName: teamName,
        championList: boadPosition,
      };
      updateMyTeamList(myTeam);
    } else {
      alert('TeamNameを入力してください。');
    }
  };

  //removeボタン処理
  const removeClick = () => {

  }

  //newボタン処理
  const newClick = () => {
    setBoadPosition(new Map());
    setChampionList([]);
    setTeamName("");
  }

  return (
    <div className={`${className}`}>
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
          <button className={`${className}__save`} onClick={saveClick}>
            Save
          </button>
          <button className={`${className}__remove`} onClick={removeClick}>Remove</button>
          <button className={`${className}__new`} onClick={newClick}>New</button>
        </div>
      </div>
      <div className={`${className}__build`}>
        <div className={`${className}__traitsList`}>
          <Traits championList={championList} />
        </div>
        <div className={`${className}__placementPlace`}>
          <div className={`${className}__pentagonGrayListUp`}>
            {pentagon(`gray`, `1`)}
          </div>
          <div className={`${className}__pentagonWhiteList`}>
            {pentagon(`white`, `2`)}
          </div>
          <div className={`${className}__pentagonGrayListDown`}>
            {pentagon(`gray`, `3`)}
          </div>
          <div className={`${className}__pentagonWhiteList`}>
            {pentagon(`white`, `4`)}
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
    font-size: 14px;
    color: #e6e8ed;
  }
  &__save {
    width: 60px;
    height: 28px;
    border-radius: 6px;
    background-color: #5987cd;
    margin-right: 4px;
  }
  &__remove {
    width: 60px;
    height: 28px;
    border-radius: 6px;
    background-color: #e45e5e;
    margin-right: 4px;
  }
  &__new {
    width: 60px;
    height: 28px;
    border-radius: 6px;
    background-color: #ffffff;
    color: #5987cd;
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
