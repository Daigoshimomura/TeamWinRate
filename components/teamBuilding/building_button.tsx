import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  type: string;
  click: () => void;
};

const Base: React.FC<Props> = ({ className, type, click }) => {
  return (
    <button className={`${className}__${type}`} onClick={click}>
      {type}
    </button>
  );
};

const Building_Button = styled(Base)`
  &__Save {
    width: 60px;
    height: 28px;
    border-radius: 6px;
    background-color: #5987cd;
    margin-right: 4px;
  }
  &__New {
    width: 60px;
    height: 28px;
    border-radius: 6px;
    background-color: #ffffff;
    color: #5987cd;
  }
`;

export default Building_Button;
