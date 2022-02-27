import { Login } from 'components/login/login';
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { LoginButton } from 'components/header/loginButton';
import Title from 'components/header/title';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const onLoginClick = useCallback(() => {
    setIsLogin(!isLogin);
  }, [isLogin]);

  return (
    <header className={`${className}`}>
      <Title />
      <LoginButton onLoginClick={onLoginClick} />
      {isLogin ? <Login onLoginClick={onLoginClick} /> : null}
    </header>
  );
};

const Header = styled(Base)`
  height: 80px;
  width: 100%;
  background-color: #4e4e4e;
  position: relative;
  border-bottom: 1px solid;
  border-color: #8c8c8c;
`;

export default Header;
