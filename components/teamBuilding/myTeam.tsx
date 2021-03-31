import { TeamList } from 'components/teamBuilding/building';
import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  myTeamsList: TeamList[];
};

const Base: React.FC<Props> = ({ className, myTeamsList }) => {

  const teamList = () => {
    const champions = [];
    for (let i = 0; i < 10; i++) {
      champions.push(
        <img
          key={i}
          className={`${className}__championImg`}
          src={`/champions/TFT4_Akali.png`}
        />
      );
    }
    const team = [];
    for (let i = 0; i < 5; i++) {
      team.push(
        <div key={i} className={`${className}__team`}>
          <div className={`${className}__teamName`}>
            とっても長いチーム名をつけるとこういう感じになります。
          </div>
          <div className={`${className}__champions`}>{champions}</div>
        </div>
      );
    }
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
    margin: 14px 0 0 19px;
  }
  &__championImg {
    height: 42px;
    width: 40px;
    border: 2px solid #cd59b3;
    border-radius: 6px;
    margin-right: 4px;
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
