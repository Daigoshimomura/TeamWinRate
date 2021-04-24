import champions from 'public/json/champions.json';
import traitsList from 'public/json/traits.json';
import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  championList: string[];
};

const Base: React.FC<Props> = ({ className, championList }) => {
  //画面に出力している特性
  const outputTraitsList = new Map<string, number>();
  //重複している要素を削除
  const newChampionList: string[] = [...new Set(championList)];
  //championの特性をoutputTraitsListに入れる
  champions.forEach((elm) => {
    newChampionList.forEach((element) => {
      if (elm.championId === element) {
        elm.traits.forEach((item) => {
          //チャンピオン特性名から画像名に変換
          const trait = traitsList.find((innerTrait) => {
            if (item === innerTrait.key) {
              return innerTrait.name;
            }
          });
          if (trait?.name) {
            const innerItem = outputTraitsList.get(trait.name);
            if (innerItem) {
              outputTraitsList.set(trait.name, innerItem + 1).entries();
            } else {
              outputTraitsList.set(trait.name, 1).entries();
            }
          }
        });
      }
    });
  });

  //画面に表示されている特性の数値によって出力を変更
  const selectNumber = (
    outputNumber: number,
    index: number,
    itemListlength: number,
    item: number
  ) => {
    if (outputNumber === item) {
      if (index !== itemListlength - 1) {
        return (
          <>
            <span className={`${className}__selectNumber`}>{item}</span>/
          </>
        );
      }
      return <span className={`${className}__selectNumber`}>{item}</span>;
    } else {
      if (index !== itemListlength - 1) {
        return `${item}/`;
      }
      return `${item}`;
    }
  };

  //画面出力処理
  const traits = () => {
    const screenOutput: JSX.Element[] = [];
    //出力する前に値順に並べ替え
    const outputTraits = new Map(
      [...outputTraitsList.entries()].sort((a, b) => b[1] - a[1])
    );

    //champion分だけの特性表示
    outputTraits.forEach((key, value) => {
      const sets = () => {
        //特性の表示する数値
        for (const item of traitsList) {
          if (item.name === value) {
            const result: (string | JSX.Element)[] = item.sets.map(
              (elm, index) => {
                return selectNumber(key, index, item.sets.length, elm.min);
              }
            );
            return result;
          }
        }
      };
      screenOutput.push(
        <div className={`${className}__mainElement`}>
          <div className={`${className}__traits`}>
            <div className={`${className}__activateNumber`}>{key}</div>
            <div>
              <img
                className={`${className}__traitsImg`}
                src={`/traits/${value}.png`}
              />
            </div>
            <div className={`${className}__traitsNumber`}>{sets()}</div>
          </div>
        </div>
      );
    });
    return screenOutput;
  };
  return <>{traits()}</>;
};

const TraitsList = styled(Base)`
  &__mainElement {
    display: flex;
    flex-direction: row;
    margin-bottom: 6px;
    margin-right: 4px;
  }
  &__traits {
    display: flex;
    flex-direction: row;
    color: #e6e8ed;
    width: 104px;
    height: 38px;
    background-color: #7b7b7b;
    border-radius: 6px;
    align-items: center;
  }
  &__activateNumber {
    display: flex;
    width: 22px;
    height: 38px;
    background-color: #5987cd;
    border-radius: 6px 0 0 6px;
    align-items: center;
    padding-left: 7px;
    margin-right: 2px;
  }
  &__traitsImg {
    width: 28px;
    height: 32px;
    margin-top: 6px;
  }
  &__traitsNumber {
    width: 46px;
    color: #b2b2b2;
    font-size: 12px;
    margin-left: 1px;
    text-align: center;
  }
  &__selectNumber {
    font-weight: bold;
    color: #e6e8ed;
  }
`;

export default TraitsList;
