import champions from 'public/json/champions.json';
import React from 'react';
import { useDrop, useDrag } from 'react-dnd';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  const championList = champions.map((elm, index) => {
    const [, ref] = useDrag(() => ({
      type: `${elm.name}`,
    }));
    return (
      <ChampionImage
        key={index}
        ref={ref}
        src={`/champions/${elm.championId}.png`}
        color={`${elm.cost}`}
      />
    );
  });

  const [, ref] = useDrop({
    accept: 'champion',
  });

  return (
    <div ref={ref} className={`${className}`}>
      <div className={`${className}__header`}>Champion Pool</div>
      <div className={`${className}__championList`}>{championList}</div>
    </div>
  );
};

// チャンピオン画像枠の色用
export const chooseColor = (color?: string) => {
  if (color === `5`) {
    return `#DBDF1D`;
  } if (color === `4`) {
    return `#cd59b3`;
  } if (color === `3`) {
    return `#2446f0`;
  } if (color === `2`) {
    return `#2AEB3D`;
  } 
    return `#9C9494`;
  
};

const ChampionImage = styled.img`
  width: 60px;
  height: 62px;
  border-radius: 6px;
  margin-right: 3px;
  border: 2px solid ${(props) => chooseColor(props.color)};
`;

const Pool = styled(Base)`
  padding: 8px 12px 6px 12px;
  &__header {
    color: #b3b3b3;
    font-weight: bold;
    font-size: 18px;
  }
  &__championList {
    margin: 2px 0 0 21px;
  }
  &__championImg {
    width: 60px;
    height: 62px;
    border-radius: 6px;
    margin-right: 3px;
    border: 2px solid;
  }
`;

export default Pool;
