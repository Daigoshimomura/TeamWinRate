import { ConnectDragSource } from 'react-dnd';
import styled from 'styled-components';

type Props = {
  className?: string;
  position: string;
  useDragRef: (position: string) => ConnectDragSource;
  useDropRef: (position: string) => ConnectDragSource;
  championName: string | undefined;
  pentagonColor: string;
  isShown: boolean;
}

const Base: React.FC<Props> = ({
  className,
  position,
  useDragRef,
  useDropRef,
  isShown,
  championName,
  pentagonColor,
}) => {
  const dragRef = useDragRef(position);
  const dropRef = useDropRef(position);
  if (isShown) {
    return (
      <div className={`${className}__hexagon`}>
        <div className={`${className}__hexagon__inner-1`}>
          <div className={`${className}__hexagon__inner-2`}>
            <div className={`${className}__hexagon__inner-3`}>
              <img
                className={`${className}__hexagon__inner-image`}
                ref={dragRef}
                key={position}
                src={`/champions/${championName}.png`}
                alt={`${championName}`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <img
      ref={dropRef}
      key={position}
      className={`${className}__pentagonImg`}
      src={`/build/Pentagon-${pentagonColor}.png`}
      alt="pentagon"
    />
  );
};

export const DragChampionImg = styled(Base)`
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
