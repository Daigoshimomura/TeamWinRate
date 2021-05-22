import champions from 'public/json/champions.json';

//championNameを受け取りchampion情報を返す
export const fetchChampionFindName = (championName: string) => {
  const index: number = champions.findIndex(
    (champion) => champion.name === championName
  );
  return champions[index];
};

//championIDを受け取りchampion情報を返す
export const fetchChampionFindId = (championID: string) => {
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
