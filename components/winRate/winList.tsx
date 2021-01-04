import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  rank: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <>
      <tr className={`${className}__item`}>
        <td className={`${className}__symergies`}>Hunter/Adept</td>
        <td className={`${className}__traitsList`}>
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
          <img className={`${className}__traits`} src={`/traits/adept.png`} />
        </td>
        <td className={`${className}__championsList`}>
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
        </td>
        <td className={`${className}__1th`}>90.5%</td>
        <td className={`${className}__4th`}>60.9%</td>
      </tr>
    </>
  );
};

const winList = styled(Base)`
  &__symergies {
    color: #e6e8ed;
    border-bottom: 1px solid #b2b2b2;
  }
  &__traitsList {
    border-bottom: 1px solid #b2b2b2;
  }
  &__traits {
    width: 40px;
    height: 43px;
    margin-right: 8px;
  }
  &__championsList {
    border-bottom: 1px solid #b2b2b2;
  }
  &__champions {
    width: 40px;
    height: 40px;
    border: 2px solid #cd59b3;
    box-sizing: border-box;
    border-radius: 6px;
    margin-right: 8px;
  }
  &__1th {
    color: #ff7c7c;
    border-bottom: 1px solid #b2b2b2;
  }
  &__4th {
    color: #ffffff;
    border-bottom: 1px solid #b2b2b2;
  }
`;

export default winList;
