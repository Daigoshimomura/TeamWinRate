import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <button className={`${className}__singin`}>Sign In</button>
      <button className={`${className}__login`}>Login</button>
    </div>
  );
};

const Login = styled(Base)`
  width: 100%;
  font-size: 20px;
  color: #e6e8ed;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
  &__singin {
    height: 34px;
    width: 145px;
    border-radius: 10px;
    font-weight: bolder;
    margin-right: 10px;
    background-color: #ffffff;
    color: #5987cd;
  }
  &__login {
    height: 34px;
    width: 145px;
    border-radius: 10px;
    font-weight: bolder;
    margin-right: 30px;
    background-color: #5987cd;
    color: #ffffff;
  }
`;

export default Login;
