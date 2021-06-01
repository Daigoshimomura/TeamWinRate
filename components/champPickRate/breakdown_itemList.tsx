import { Item } from 'components/champPickRate/breakdown_item';
import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export const ItemList = styled(Base)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #8c8c8c;
`;
