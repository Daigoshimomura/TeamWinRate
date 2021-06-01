import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  rank: number;
};

const Base: React.FC<Props> = ({ className, rank }) => {
  return (
    <div className={`${className}`}>
      <div className={`${className}__rank`}>{rank}</div>
      <div className={`${className}__champions`}>
        <img
          className={`${className}__championImg`}
          src={`/champions/TFT4_Aatrox.png`}
        />
        Aatrox
      </div>
      <div className={`${className}__synergies`}>
        <img className={`${className}__traitsImg`} src={`/traits/adept.png`} />
        <img className={`${className}__traitsImg`} src={`/traits/adept.png`} />
        <img className={`${className}__traitsImg`} src={`/traits/adept.png`} />
      </div>
      <div className={`${className}__item`}>
        <img className={`${className}__itemImg`} src={`/items/99.png`} />
        <img className={`${className}__itemImg`} src={`/items/99.png`} />
        <img className={`${className}__itemImg`} src={`/items/99.png`} />
      </div>
      <div className={`${className}__pick`}>30%</div>
    </div>
  );
};

export const Item = styled(Base)`
  height: 38px;
  color: #e6e8ed;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #8c8c8c;
  &__rank {
    width: 10px;
    margin-left: 14px;
  }
  &__champions {
    width: 122px;
    font-size: 18px;
    display: flex;
    margin-left: 29px;
  }
  &__championImg {
    width: 20px;
    height: 20px;
    border: 2px solid #918989;
    margin-right: 4px;
    margin-top: 3px;
  }
  &__synergies {
    width: 75px;
    display: flex;
    margin-left: 42px;
  }
  &__traitsImg {
    width: 20px;
    height: 24px;
    margin-right: 8px;
  }
  &__item {
    width: 75px;
    display: flex;
    margin-left: 45px;
  }
  &__itemImg {
    width: 20px;
    height: 20px;
    border: 2px solid #918989;
    margin-right: 4px;
  }
  &__pick {
    font-size: 20px;
    margin-left: 49px;
  }
`;
