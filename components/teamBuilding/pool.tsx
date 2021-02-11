import champions from 'public/json/champions.json';
import React from 'react';
import { useDrag } from 'react-dnd';

import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  const championList = champions.map((elm, index) => {
    const [{ isDragging }, ref] = useDrag({
      item: { type: `${elm.name}` },
      collect: (monitor) => {
        return {
          isDragging: monitor.isDragging(),
        };
      },
    });
    return (
      <img
        key={index}
        ref={ref}
        className={`${className}__championImg`}
        src={`/champions/${elm.championId}.png`}
      />
    );
  });

  return (
    <div className={`${className}`}>
      <div className={`${className}__header`}>Champion Pool</div>
      <div className={`${className}__championList`}>{championList}</div>
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
