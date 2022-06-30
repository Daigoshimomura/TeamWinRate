import React from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

type Props = {
  championName : string;
  championId : string;
  cost: string;
};

export const ChampionList: React.FC<Props> = ({ championName,championId,cost}) => {
    const [, ref] = useDrag(() => ({
      type: `${championId}`,
    }));

  return (
    <ChampionImage
        key={championName}
        ref={ref}
        src={`/champions/${championName}.png`}
        color={`${cost}`}
      />
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


