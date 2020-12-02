import React from 'react';
import styled from 'styled-components';
import Login from './login';
import Title from './title';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <header className={`${className}`}>
      <Title />
      <Login />
    </header>
  );
};

const Header = styled(Base)`
  height: 50px;
  width: 100%;
  background-color: #4e4e4e;
  position: relative;
`;

export default Header;
