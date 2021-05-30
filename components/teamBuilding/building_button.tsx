import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  type: 'Save' | 'New';
  onClick: () => void;
};

const Base: React.FC<Props> = ({ className, type, onClick }) => {
  return (
    <button className={`${className}__${type}`} onClick={onClick}>
      {type}
    </button>
  );
};

const BuildingButton = styled(Base)`
  &__Save {
    width: 60px;
    height: 28px;
    border-radius: 6px;
    background-color: #5987cd;
  }
  &__New {
    width: 60px;
    height: 28px;
    border-radius: 6px;
    background-color: #ffffff;
    color: #5987cd;
  }
`;

export default BuildingButton;
