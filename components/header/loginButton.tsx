import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  onLoginClick: () => void;
};

const Base: React.FC<Props> = ({ className, onLoginClick }) => {
  return (
    <div className={`${className}`}>
      <button
        className={`${className}__login`}
        onClick={() => {
          onLoginClick();
        }}
      >
        Login
      </button>
    </div>
  );
};

export const LoginButton = styled(Base)`
  width: 100%;
  font-size: 20px;
  color: #e6e8ed;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
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
