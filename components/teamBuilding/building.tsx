import Traits from 'components/teamBuilding/traitsList';
import champions from 'public/json/champions.json';
import React, { useState } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  //ボード上にチャンピオン画像の出力設定
  const [championimg, setChampionimg] = useState<string>();
  //ドラップ位置
  const [championPosition, setChampionPosition] = useState<string>();
  const moveChampion = (monitor: string | symbol) => {
    const IdNumber: number = champions.findIndex(
      (champion) => champion.name === monitor
    );
    setChampionimg(`/champions/${champions[IdNumber].championId}.png`);
  };

  //bulidingにあるchampionがpoolにドラッグされたときの処理
  const movePool = () => {
    setChampionPosition(`pool`);
  };

  //ドラッグ用のtypes
  const types: string[] = champions.map((elm) => {
    return elm.name;
  });

  //ドラッグされたchampionのimgタグ
  const dragChampion = () => {
    const [, ref] = useDrag({
      item: { type: 'champion' },
      end: (draggedItem, monitor) => {
        if (monitor.didDrop()) {
          movePool();
        }
      },
    });
    return ref;
  };

  const pentagon = (color: string, id: string) => {
    const pentagon = [];
    const refDrag = dragChampion();
    for (let i = 0; i < 7; i++) {
      const [, ref] = useDrop({
        accept: types,
        drop: (item) => {
          moveChampion(item.type);
          console.log(`i=${i},id=${id}`);
          setChampionPosition(`${id}-${i}`);
        },
      });
      const drapPosition = `${id}-${i}`;
      const dragChampionImg = () => {
        if (championPosition === drapPosition) {
          return <img ref={refDrag} key={i} src={`${championimg}`} />;
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
  return (
    <div className={`${className}`}>
      <div className={`${className}__header`}>
        <div className={`${className}__teamName`}>
          とっても長いチーム名をつけるとこういう感じになります。
        </div>
        <div className={`${className}__buttonList`}>
          <button className={`${className}__save`}>Save</button>
          <button className={`${className}__remove`}>Remove</button>
          <button className={`${className}__new`}>New</button>
        </div>
      </div>
      <div className={`${className}__build`}>
        <div className={`${className}__traitsList`}>
          <div></div>
          <Traits />
          <Traits />
          <Traits />
          <Traits />
          <Traits />
          <Traits />
          <Traits />
          <Traits />
          <Traits />
          <Traits />
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
`;

export default Building;
