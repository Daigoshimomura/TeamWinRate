import { AuthContext } from 'components/login/authProvider';
import React, { useState } from 'react';
import styled from 'styled-components';
import { auth } from 'util_user';

type Props = {
  className?: string;
  onLoginClick: () => void;
};

const Base: React.FC<Props> = ({ className, onLoginClick }) => {
  const [isCreateAccount, setIsCreateAccount] = useState<boolean>(false);

  //状態リセット
  const batsuClick = () => {
    onLoginClick();
    setIsCreateAccount(false);
  };

  //ログイン処理
  const loginClick = async () => {
    try {
      console.log('loginClick');
      await auth.signInWithEmailAndPassword('aaa@gmali.com', '123456');
      console.log(AuthContext, 'AuthContext');
    } catch (error) {
      console.log(error, 'loginerror');
    }
  };

  return (
    <div className={`${className}`}>
      <div className={`${className}__mainSection`}>
        <button className={`${className}__batsu`} onClick={batsuClick}>
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
          {isCreateAccount ? (
            <button className={`${className}__loginButton`}>
              Create Account
            </button>
          ) : (
            <button
              className={`${className}__loginButton`}
              onClick={() => {
                loginClick();
              }}
            >
              Login
            </button>
          )}
        </div>
        <div
          className={`${className}__createButton`}
          onClick={() => {
            setIsCreateAccount(!isCreateAccount);
          }}
        >
          {isCreateAccount ? null : `Create Account`}
        </div>
      </div>
    </div>
  );
};

export const Login = styled(Base)`
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
  &__createButton {
    font-size: 16px;
    text-align: center;
    color: #999;
  }
  &__createButton:hover {
    color: #000000;
  }
`;
