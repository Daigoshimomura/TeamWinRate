import React from 'react';
import styled from 'styled-components';
import { LoginButton } from '../button/menu';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <LoginButton className={`${className}__singin`}>Sign In</LoginButton>
      <LoginButton className={`${className}__login`}>Login</LoginButton>
    </div>
  );
};

const Login = styled(Base)`
  width: 100%;
  font-size: 14px;
  color: #e6e8ed;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: right;
  &__singin {
    margin-right: 10px;
    background-color: #ffffff;
    color: #5987cd;
  }
  &__login {
    margin-right: 30px;
    background-color: #5987cd;
    color: #ffffff;
  }
`;

export default Login;
