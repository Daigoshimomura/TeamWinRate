import { GetStaticPaths } from 'next';
import React from 'react';
import Layout from '../../components/layout';

//TODO 変数名修正。
type Props = {
  className?: string;
};

type Paths = {
  params: {
    champRank: string;
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
      { params: { champRank: 'Challenger' } },
      { params: { champRank: 'Master' } },
      { params: { champRank: 'Diamond' } },
      { params: { champRank: 'Platinum' } },
      { params: { champRank: 'Gold' } },
      { params: { champRank: 'Silver' } },
      { params: { champRank: 'Bronze' } },
      { params: { champRank: 'Iron' } },
    ],
    fallback: false,
  };
};

export default Post;
