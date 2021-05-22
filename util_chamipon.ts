import champions from 'public/json/champions.json';
import { useMemo } from 'react';

//championNameを受け取りchampion情報を返す
export const fetchChampion_name = (championName: string) => {
  const index: number = champions.findIndex(
    (champion) => champion.name === championName
  );
  return champions[index];
};

//championIDを受け取りcostを返す
export const fetchChampion_id = (championName: string) => {
  const index: number = champions.findIndex(
    (champion) => champion.championId === championName
  );
  return champions[index];
};

//championのnameをすべて返す
export const fetchChampionNameList = () => {
  return useMemo(
    () =>
      champions.map((elm) => {
        return elm.name;
      }),
    [champions]
  );
};
