import { GetStaticPaths } from 'next';
import React from 'react';
import Layout from '../../components/layout';

//TODO 変数名修正。
type Props = {
  className?: string;
};

type Paths = {
  params: {
    mode: string;
  };
};

const Post: React.FC<Props> = ({ className }) => {
  return (
    <Layout>
      <div className={className}>rank</div>
    </Layout>
  );
};

export const getStaticProps = async ({ params }: Paths) => {
  return {
    props: {
      data: params,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { mode: 'Challenger' } },
      { params: { mode: 'Master' } },
      { params: { mode: 'Diamond' } },
      { params: { mode: 'Platinum' } },
      { params: { mode: 'Gold' } },
      { params: { mode: 'Silver' } },
      { params: { mode: 'Bronze' } },
      { params: { mode: 'Iron' } },
    ],
    fallback: false,
  };
};

export default Post;
