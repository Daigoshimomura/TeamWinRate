import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className={`${className}__word`}>Logout</div>
    </div>
  );
};

export const LogOut = styled(Base)`
  position: absolute;
  height: 50px;
  width: 250px;
  right: 20px;
  font-size: 18px;
  color: #b2b2b2;
  background-color: #585755;
  border: 1px solid #8c8c8c;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  &__word {
    text-align: left;
    line-height: 50px;
    margin-left: 15px;
  }
`;
