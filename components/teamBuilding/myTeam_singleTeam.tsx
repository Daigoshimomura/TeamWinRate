import Sidebutton from 'components/teamBuilding/myTeam_sideButton';
import { TeamType } from 'components/teamBuilding/teamBuilding';
import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

type Props = {
  className?: string;
  myTeamsList: TeamType[];
  drapTopTeam?: number;
  drapUnderTeam?: number;
  myTeamIndex: number;
  sideButtonOnclick: (type: string, Index: number) => void;
  outputChampionList: JSX.Element[];
};

const Base: React.FC<Props> = ({
  className,
  myTeamsList,
  drapTopTeam,
  drapUnderTeam,
  myTeamIndex,
  sideButtonOnclick,
  outputChampionList,
}) => {
  //サイドメニューflag
  const [isSideOpen, setIsSideOpen] = useState<boolean>(false);
  //myteamドラッグのref
  const dragMyTeam = (index: number) => {
    const [, ref] = useDrag({
      item: { type: 'team', MyTeam: myTeamsList[index], MyTeamIndex: index },
    });
    return ref;
  };

  const refDrag = dragMyTeam(myTeamIndex);

  return (
    <div
      key={myTeamIndex}
      ref={refDrag}
      className={
        drapTopTeam === myTeamIndex || drapUnderTeam === myTeamIndex
          ? `${className}__selectTeam`
          : `${className}__team`
      }
    >
      <div className={`${className}__teamName`}>
        {myTeamsList[myTeamIndex].teamName}

        <div
          onClick={() => {
            setIsSideOpen(!isSideOpen);
          }}
        >
          ︙
        </div>
      </div>
      {isSideOpen ? (
        <Sidebutton
          isSideOpen={isSideOpen}
          index={myTeamIndex}
          sideButtonOnclick={sideButtonOnclick}
          setIsSideOpen={setIsSideOpen}
        />
      ) : null}

      <div className={`${className}__champions`}>{outputChampionList}</div>
    </div>
  );
};

const SingleTeam = styled(Base)`
  &__team {
    width: 474px;
    height: 95px;
    background-color: #7b7b7b;
    border-radius: 6px;
    margin-bottom: 4px;
  }
  &__selectTeam {
    width: 474px;
    height: 95px;
    background-color: #5987cd;
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
    display: flex;
    justify-content: space-between;
  }
  &__champions {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 14px 0 0 19px;
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

export default SingleTeam;
