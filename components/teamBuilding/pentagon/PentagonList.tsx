import React, { useMemo } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { fetchChampionNameList } from 'util_chamipon';
import { DragChampionImg } from 'components/teamBuilding/pentagon/Pentagon';

type Props = {
  color: string;
  id: string;
  boadPosition: Map<string, string>;
  moveChampion: (monitor: string | symbol, position: string) => void;
  movePool: (position: string) => void;
};

export const PentagonList: React.FC<Props> = ({
  color,
  id,
  boadPosition,
  moveChampion,
  movePool,
}) => {
  // championドラッグref
  const useDragRef = (position: string) => {
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
  const useDropRef = (position: string) => {
    const types: string[] = useMemo(() => fetchChampionNameList(), []);
    const [, drop] = useDrop(() => ({
      accept: types,
      drop: (item, monitor) => {
        const items: string = monitor.getItemType() as string;
        moveChampion(items, position);
      },
    }));
    return drop;
  };

  const newpentagon: JSX.Element[] = [];
  for (let i = 0; i < 7; i++) {
    // ドラッグされた位置
    const dragPosition = `${id}-${i}`;
    newpentagon.push(
      <DragChampionImg
        position={dragPosition}
        useDragRef={useDragRef}
        useDropRef={useDropRef}
        championName={boadPosition.get(dragPosition)}
        pentagonColor={color}
        isShown={boadPosition.has(dragPosition)}
      />
    );
  }
  return <>{newpentagon}</>;
};
