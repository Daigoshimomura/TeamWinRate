import { Item } from 'components/champPickRate/breakdown_item';
import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

// デザイン表示用
const items = () => {
  const result: JSX.Element[] = [];
  for (let i = 1; i <= 12; i++) {
    result.push(<Item rank={i} />);
  }
  return result;
};

const Base: React.FC<Props> = ({ className }) => <div className={`${className}`}>{items()}</div>;

export const ItemList = styled(Base)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #8c8c8c;
`;
