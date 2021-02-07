import { ItemTypes } from 'components/teamBuilding/itemType';
import React from 'react';
import { useDrag } from 'react-dnd';

import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.Aatrox },
    collect: (monitor) => {
      // console.log('monitor', monitor);
      console.log('---------');
      console.log('isDragging', monitor.isDragging());
      console.log('canDrag', monitor.canDrag());
      console.log('didDrop', monitor.didDrop());
      console.log('---------');

      return {
        isDragging: monitor.isDragging(),
      };
    },
  });
  const championList = () => {
    const champions = [];
    for (let i = 0; i < 1; i++) {
      champions.push(
        <img
          ref={drag}
          className={`${className}__championImg`}
          src={
            isDragging
              ? `/champions/TFT4_Akali.png`
              : `/champions/TFT4_Aatrox.png`
          }
        />
      );
    }
    return champions;
  };

  return (
    <div className={`${className}`}>
      <div className={`${className}__header`}>Champion Pool</div>
      <div className={`${className}__championList`}>{championList()}</div>
    </div>
  );
};

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
    border: 2px solid #cd59b3;
    border-radius: 6px;
    margin-right: 3px;
  }
`;

export default Pool;
