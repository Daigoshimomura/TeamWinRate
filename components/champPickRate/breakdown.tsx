import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return <div className={`${className}`}></div>;
};

export const Breakdown = styled(Base)`
  height: 480px;
  width: 525px;
  display: flex;
  flex-direction: column;
  background-color: #4e4e4e;
`;
