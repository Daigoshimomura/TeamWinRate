import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}__mainElement`}>
      <div className={`${className}__traits`}>
        <div className={`${className}__activateNumber`}>2</div>
        <div>
          <img
            className={`${className}__traitsImg`}
            src={`/traits/adept.png`}
          />
        </div>
        <div className={`${className}__traitsNumber`}>1/2/3/4</div>
      </div>
    </div>
  );
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
`;

export default TraitsList;
