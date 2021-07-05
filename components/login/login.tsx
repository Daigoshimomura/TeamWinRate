import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  onLoginClick: () => void;
};

const Base: React.FC<Props> = ({ className, onLoginClick }) => {
  return (
    <div className={`${className}`}>
      <div className={`${className}__mainSection`}>
        <button className={`${className}__batsu`} onClick={onLoginClick}>
          ×
        </button>
        <div className={`${className}__inputSection`}>
          <div>
            <span>User</span>
            <input
              className={`${className}__input`}
              type="text"
              title="username"
            />
          </div>
          <div>
            <span>Passward</span>
            <input
              className={`${className}__input`}
              type="password"
              title="username"
            />
          </div>
          <button className={`${className}__loginButton`}>Login</button>
        </div>
      </div>
    </div>
  );
};

const Header = styled(Base)`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  &__mainSection {
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    background-color: #fff;
    color: #000000;
    font-size: 20px;
  }
  &__input {
    display: block;
    border: 1px solid;
  }
  &__batsu {
    font-size: 100%;
    font-weight: bold;
    border: 1px solid #999;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 1.4em;
    line-height: 1.3em;
    cursor: pointer;
    transition: 0.2s;
    margin: 4px 5px 0 auto;
  }
  &__batsu:hover {
    background: #333;
    border-color: #333;
    color: #fff;
  }
  &__inputSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 350px;
    margin-top: -10px;
  }
  &__loginButton {
    background: #40495a;
    color: #e6e8ed;
    width: 267px;
    height: 50px;
    border-radius: 3px;
  }
`;

export default Header;
