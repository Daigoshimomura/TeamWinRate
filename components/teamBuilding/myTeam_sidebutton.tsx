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
  index,
  sideButtonOnclick,
  setIsSideOpen,
}) => (
  <div className={`${className}__sidemenu`}>
    <button type="button" onClick={() => setIsSideOpen(false)}>
      <div className={`${className}__back`} />
    </button>
    <button
      type="button"
      className={`${className}__sideButton`}
      onClick={() => {
        sideButtonOnclick('UP', index);
        setIsSideOpen(!isSideOpen);
      }}
    >
      Up
    </button>
    <button
      type="button"
      className={`${className}__sideButton`}
      onClick={() => {
        sideButtonOnclick('UNDER', index);
        setIsSideOpen(!isSideOpen);
      }}
    >
      Under
    </button>
    <button
      type="button"
      onClick={() => {
        sideButtonOnclick('REMOVE', index);
        setIsSideOpen(!isSideOpen);
      }}
    >
      Remove
    </button>
  </div>
);

const SideButton = styled(Base)`
  &__back {
    z-index: -1;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vmax;
    height: 100vmax;
    transform: none;
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
    text-align: left;
    padding-left: 5px;
    padding-bottom: 2px;
    border-bottom: 1px solid;
    border-color: #656565;
  }
`;

export default SideButton;
