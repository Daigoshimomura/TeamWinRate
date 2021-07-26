import { AuthContext } from 'components/login/authProvider';
import { LogOut } from 'components/login/logOut';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  onLoginClick: () => void;
};

const Base: React.FC<Props> = ({ className, onLoginClick }) => {
  //mailClick判定
  const [isMailOpen, setIsMailOpen] = useState<boolean>(false);

  const user = useContext(AuthContext);

  return (
    <div className={`${className}`}>
      {!user?.email ? (
        <button
          className={`${className}__login`}
          onClick={() => {
            onLoginClick();
          }}
        >
          Login
        </button>
      ) : (
        <div className={`${className}__userSection`}>
          <div className={`${className}__emailSection`}>
            <div className={`${className}__email`}>{user?.email}</div>
            {isMailOpen ? (
              <div>
                <img
                  className={`${className}__arrow`}
                  src={`/button/arrow-up16.png`}
                  onClick={() => {
                    setIsMailOpen(!isMailOpen);
                  }}
                />
              </div>
            ) : (
              <img
                className={`${className}__arrow`}
                src={`/button/arrow-down16.png`}
                onClick={() => {
                  setIsMailOpen(!isMailOpen);
                }}
              />
            )}
          </div>
          {isMailOpen ? <LogOut /> : null}
        </div>
      )}
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
  &__userSection {
  }
  &__emailSection {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &__email {
    font-size: 24px;
    font-weight: bold;
  }
  &__arrow {
    margin: 0 20px 0 12px;
    height: 24px;
    width: 24px;
  }
`;
