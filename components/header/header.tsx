import React from 'react';
import styled from 'styled-components';
import title from './title';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <header className={`${className}`}>
      <title />
    </header>
  );
};

const Header = styled(Base)`
  width: 100%;
  height: 83px;
  background-color: #4e4e4e;
`;

export default Header;
