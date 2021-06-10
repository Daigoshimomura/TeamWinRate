import React from 'react';
import { PieChart, Pie, Text } from 'recharts';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  const data = [
    {
      index: 0,
      name: 'データ1',
      value: 300,
    },
    {
      index: 1,
      name: 'データ2',
      value: 200,
    },
    {
      index: 2,
      name: 'データ3',
      value: 380,
    },
    {
      index: 3,
      name: 'データ3',
      value: 80,
    },
    {
      index: 4,
      name: 'データ4',
      value: 40,
    },
  ];

  const label = ({ name, value, cx, x, y }) => {
    const textAnchor = x > cx ? 'start' : 'end';
    return (
      <>
        {/* 引数で付属情報を受け取れます */}
        <Text x={x} y={y} fill="#82ca9d" textAnchor={textAnchor}>
          {name}
        </Text>
        <Text
          x={x}
          y={y}
          dominantBaseline="hanging"
          fill="#82ca9d"
          textAnchor={textAnchor}
        >
          {value}
        </Text>
      </>
    );
  };

  return (
    <div className={`${className}`}>
      <PieChart width={550} height={485}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="47%"
          outerRadius={150}
          fill="#82ca9d"
          label={label}
        />
      </PieChart>
    </div>
  );
};

export const Circle = styled(Base)``;
