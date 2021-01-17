import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  const championList = () => {
    const champions = [];
    for (let i = 0; i < 58; i++) {
      champions.push(
        <img
          key={i}
          className={`${className}__championImg`}
          src={`/champions/TFT4_Ahri.png`}
        />
      );
    }
    return champions;
  };

  return (
    <div className={`${className}`}>
      <div className={`${className}__header`}>Champion Pool</div>
      <div className={`${className}__championList`}>{championList()}</div>
    </div>
  );
};

const Pool = styled(Base)`
  padding: 8px 12px 6px 12px;
  &__header {
    color: #b3b3b3;
    font-weight: bold;
    font-size: 18px;
  }
  &__championList {
    margin: 2px 0 0 21px;
  }
  &__championImg {
    width: 60px;
    height: 62px;
    border: 2px solid #cd59b3;
    border-radius: 6px;
    margin-right: 3px;
  }
`;

export default Pool;
