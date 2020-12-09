import styled from 'styled-components';

//hederloginボタン
export const LoginButton = styled.button`
  height: 34px;
  width: 145px;
  border-radius: 10px;
  font-weight: bolder;
`;

//sidemenuボタン
export const MenuButton = styled.a`
  font-size: 18px;
  color: #b2b2b2;
  text-decoration: none;
  position: relative;
  display: inline-block;
  transition: 0.1s;
  cursor: pointer;
  ::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    content: '';
    width: 0;
    height: 2px;
    background-color: #b2b2b2;
    transition: 0.3s;
    transform: translateX(-50%);
  }
  :hover::after {
    width: 100%;
  }
`;

export const Menu = styled.div`
  font-size: 18px;
  color: #b2b2b2;
  text-decoration: none;
  position: relative;
  display: inline-block;
  transition: 0.1s;
  cursor: pointer;
  ::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    content: '';
    width: 0;
    height: 2px;
    background-color: #b2b2b2;
    transition: 0.3s;
    transform: translateX(-50%);
  }
  :hover::after {
    width: 100%;
  }
`;

export const RankList = styled.li`
  font-size: 18px;
  font-weight: bold;
  display: block;
  height: 32px;
  width: 149px;
  border-radius: 10px;
  color: #ffffff;
  background-color: #5987cd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 37px;
`;
