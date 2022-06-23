import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => (
  <Layout page="Home">
    <div className={className} />
  </Layout>
);

const Index = styled(Base)``;

export default Index;

//test
