import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => <div className={`${className}`}>TeamWinRate</div>;

const Title = styled(Base)`
  font-size: 30px;
  color: #e6e8ed;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 20px;
`;

export default Title;
