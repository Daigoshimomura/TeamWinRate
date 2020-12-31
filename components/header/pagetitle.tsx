import React from 'react';
import styled from 'styled-components';

type Props = {
  page: string;
  className?: string;
};

const Base: React.FC<Props> = ({ page, className }) => {
  return (
    <div className={`${className}`}>
      <div className={`${className}__word`}>{page}</div>
    </div>
  );
};

const PageTitle = styled(Base)`
  font-size: 24px;
  color: #b2b2b2;
  position: relative;
  height: 62px;
  width: 89%;
  border-bottom: 1px solid;
  border-color: #8c8c8c;
  &__word {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin-left: 50px;
  }
`;

export default PageTitle;
