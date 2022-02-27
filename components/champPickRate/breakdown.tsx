import { ItemList } from 'components/champPickRate/breakdown_itemList';
import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => (
    <div className={`${className}`}>
      <div className={`${className}__itemNameList`}>
        <div className={`${className}__champions`}>Champions</div>
        <div className={`${className}__synergies`}>Synergies</div>
        <div className={`${className}__item`}>Item</div>
        <div className={`${className}__pick`}>Pick</div>
      </div>
      <ItemList />
    </div>
  );

export const Breakdown = styled(Base)`
  height: 480px;
  width: 525px;
  display: flex;
  flex-direction: column;
  &__itemNameList {
    display: flex;
    font-size: 18px;
    color: #b2b2b2;
  }
  &__champions {
    width: 122px;
    margin-left: 53px;
  }
  &__synergies {
    width: 75px;
    margin-left: 42px;
  }
  &__item {
    width: 75px;
    margin-left: 45px;
  }
  &__pick {
    margin-left: 49px;
  }
`;
