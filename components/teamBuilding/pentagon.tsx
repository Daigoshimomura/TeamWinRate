import React, { useMemo } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import styled from 'styled-components';
import { fetchChampionNameList } from 'util_chamipon';

type Props = {
  className?: string;
  color: string;
  id: string;
  boadPosition: Map<string, string>;
  moveChampion: (monitor: string | symbol, position: string) => void;
  movePool: (position: string) => void;
};

const Base: React.FC<Props> = ({
  className,
  color,
  id,
  boadPosition,
  moveChampion,
  movePool,
}) => {
  // championドラッグref
  const refDrag = (position: string) => {
    const [, ref] = useDrag({
      type: 'champion',
      end: (draggedItem, monitor) => {
        if (monitor.didDrop()) {
          movePool(position);
        }
      },
    });
    return ref;
  };

  // 空のドロップref
  const refdrop = (position: string) => {
    const types: string[] = useMemo(
      () => fetchChampionNameList(),
      [fetchChampionNameList]
    );
    const [, drop] = useDrop(() => ({
      accept: types,
      drop: (item, monitor) => {
        const items: string = monitor.getItemType() as string;
        moveChampion(items, position);
      },
    }));
    return drop;
  };

  const dragChampionImg = (dragPosition: string) => {
    const ref_Dr = refDrag(dragPosition);
    const ref_Dp = refdrop(dragPosition);
    if (boadPosition.get(dragPosition)) {
      return (
        <div className={`${className}__hexagon`}>
          <div className={`${className}__hexagon__inner-1`}>
            <div className={`${className}__hexagon__inner-2`}>
              <div className={`${className}__hexagon__inner-3`}>
                <img
                  className={`${className}__hexagon__inner-image`}
                  ref={ref_Dr}
                  key={dragPosition}
                  src={`/champions/${boadPosition.get(dragPosition)}.png`}
                  alt={`${boadPosition.get(dragPosition)}`}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <img
        ref={ref_Dp}
        key={dragPosition}
        className={`${className}__pentagonImg`}
        src={`/build/Pentagon-${color}.png`}
        alt="pentagon"
      />
    );
  };

  const newpentagon: JSX.Element[] = [];
  for (let i = 0; i < 7; i++) {
    // ドラッグされた位置
    const dragPosition = `${id}-${i}`;
    newpentagon.push(dragChampionImg(dragPosition));
  }
  return <>{newpentagon}</>;
};

const pentagon = styled(Base)`
  &__hexagon {
    position: relative;
    width: 53px;
    overflow: hidden;
    margin-right: 3px;
  }
  &__hexagon::before {
    display: block;
    padding-top: 115.4700538%;
    content: '';
  }
  &__hexagon__inner-1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: rotate(60deg);
  }
  &__hexagon__inner-2 {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: rotate(60deg);
  }
  &__hexagon__inner-3 {
    width: 100%;
    height: 100%;
    transform: rotate(-120deg);
  }
  &__hexagon__inner-image {
    width: 100%;
    height: 100%;
  }
  &__pentagonImg {
    width: 54;
    height: 62px;
    margin-right: 2px;
  }
`;

export default pentagon;
