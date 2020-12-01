import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return <h1 className={`${className}`}>TeamWinRate</h1>;
};

const Title = styled(Base)`
  width: 100%;
  height: 83px;
  background-color: #4e4e4e;
`;

export default Title;
