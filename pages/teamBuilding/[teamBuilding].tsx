import Layout from 'components/layout';
import Building from 'components/teamBuilding/teamBuilding';
import { GetStaticPaths } from 'next';
import React from 'react';

//TODO 変数名修正。
type Props = {
  className?: string;
};

type Paths = {
  params: {
    teamBuilding: string;
  };
};

const Post: React.FC<Props> = ({ className }) => {
  return (
    <Layout page={'TeamBuilding'}>
      <Building></Building>
    </Layout>
  );
};

export const getStaticProps = async ({ params }: Paths) => {
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
