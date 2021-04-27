import Layout from 'components/layout';
import Building from 'components/teamBuilding/teamBuilding';
import { GetStaticPaths } from 'next';
import React from 'react';

type Props = {
  className?: string;
};

const Post: React.FC<Props> = () => {
  return (
    <Layout page={'TeamBuilding'}>
      <Building></Building>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      page: 'WinRate',
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { teamBuilding: 'teamBuilding' } }],
    fallback: false,
  };
};

export default Post;
