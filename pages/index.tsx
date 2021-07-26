import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <Layout page="Home">
      <div className={className}></div>
    </Layout>
  );
};

const Index = styled(Base)``;

export default Index;
