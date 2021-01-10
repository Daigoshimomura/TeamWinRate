import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  rank: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div className={`${className}`}>
        <div className={`${className}__symergies`}>Hunter/Adept</div>
        <div className={`${className}__traitsList`}>
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
        </div>
        <div className={`${className}__championsList`}>
          <img
            className={`${className}__champions`}
            src={`/champions/TFT4_Ahri.png`}
          />
          <img
            className={`${className}__champions`}
            src={`/champions/TFT4_Ahri.png`}
          />
          <img
            className={`${className}__champions`}
            src={`/champions/TFT4_Ahri.png`}
          />
          <img
            className={`${className}__champions`}
            src={`/champions/TFT4_Ahri.png`}
          />
          <img
            className={`${className}__champions`}
            src={`/champions/TFT4_Ahri.png`}
          />
          <img
            className={`${className}__champions`}
            src={`/champions/TFT4_Ahri.png`}
          />
          <img
            className={`${className}__champions`}
            src={`/champions/TFT4_Ahri.png`}
          />
          <img
            className={`${className}__champions`}
            src={`/champions/TFT4_Ahri.png`}
          />
          <img
            className={`${className}__champions`}
            src={`/champions/TFT4_Ahri.png`}
          />
          <img
            className={`${className}__champions`}
            src={`/champions/TFT4_Ahri.png`}
          />
        </div>
        <div className={`${className}__1st`}>90.5%</div>
        <div className={`${className}__4th`}>60.9%</div>
      </div>
    </>
  );
};

const winList = styled(Base)`
  display: flex;
  min-height: 70px;
  border-bottom: 1px solid #b2b2b2;
  &__symergies {
    display: flex;
    align-items: center;
    min-width: 150px;
    color: #e6e8ed;
  }
  &__traitsList {
    display: flex;
    align-items: center;
    min-width: 450px;
  }
  &__traits {
    width: 40px;
    height: 43px;
    margin-right: 8px;
  }
  &__championsList {
    display: flex;
    align-items: center;
    min-width: 500px;
  }
  &__champions {
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    border: 2px solid #cd59b3;
    border-radius: 6px;
    margin-right: 8px;
  }
  &__1st {
    display: flex;
    align-items: center;
    min-width: 65px;
    color: #ff7c7c;
  }
  &__4th {
    display: flex;
    align-items: center;
    min-width: 65px;
    color: #ffffff;
  }
`;

export default winList;
