import champions from 'public/json/champions.json';
import React from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { ChampionList } from 'components/teamBuilding/pool/ChampionList';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  const championList = champions.map((elm) => (
      <ChampionList
      championName={elm.championId}
      championId={elm.name}
      cost={`${elm.cost}`}
      />
    ));

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

export const Pool = styled(Base)`
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
