import champions from 'public/json/champions.json';

export type ChampionInfo = {
  name: string;
  championId: string;
  cost: number;
  traits: string[];
};

//championNameを受け取りchampion情報を返す
export const fetchChampionFindName = (championName: string): ChampionInfo => {
  const index: number = champions.findIndex(
    (champion) => champion.name === championName
  );
  return champions[index];
};

//championIDを受け取りchampion情報を返す
export const fetchChampionFindId = (championID: string): ChampionInfo => {
  const index: number = champions.findIndex(
    (champion) => champion.championId === championID
  );
  return champions[index];
};

//championのnameをすべて返す
export const fetchChampionNameList = () => {
  return champions.map((elm) => {
    return elm.name;
  });
};
