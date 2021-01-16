import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className={`${className}__header`}>
        <div className={`${className}__teamName`}>
          とっても長いチーム名をつけるとこういう感じです。
        </div>
        <div className={`${className}__buttonList`}>
          <button className={`${className}__save`}>Save</button>
          <button className={`${className}__remove`}>Remove</button>
          <button className={`${className}__new`}>New</button>
        </div>
      </div>
      <div className={`${className}__bulid`}>
        <div className={`${className}__traitsList`}></div>
        <div className={`${className}__placementPlace`}></div>
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
  }
  &__teamName {
    max-width: 445px;
    font-size: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #e6e8ed;
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
`;

export default Building;
