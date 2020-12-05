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
  color: #b2b2b2;
  text-decoration: none;
  position: relative;
  display: inline-block;
  transition: 0.1s;
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
