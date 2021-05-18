import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  isSideOpen: boolean;
  index: number;
  sideButtonOnclick: (type: string, index: number) => void;
  setIsSideOpen: (item: boolean) => void;
};

const Base: React.FC<Props> = ({
  className,
  isSideOpen,
  index: Index,
  sideButtonOnclick,
  setIsSideOpen,
}) => {
  return (
    <div className={`${className}__sidemenu`}>
      <div
        className={`${className}__sideButton`}
        onClick={() => {
          sideButtonOnclick('UP', Index), setIsSideOpen(!isSideOpen);
        }}
      >
        Up
      </div>
      <div
        className={`${className}__sideButton`}
        onClick={() => {
          sideButtonOnclick('UNDER', Index), setIsSideOpen(!isSideOpen);
        }}
      >
        Under
      </div>
      <div
        onClick={() => {
          sideButtonOnclick('REMOVE', Index), setIsSideOpen(!isSideOpen);
        }}
      >
        Remove
      </div>
    </div>
  );
};

const SideButton = styled(Base)`
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

export default SideButton;
