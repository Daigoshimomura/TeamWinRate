import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  rank: string;
};

const Base: React.FC<Props> = ({ className, rank }) => {
  return <tr></tr>;
};

const winList = styled(Base)``;

export default winList;
