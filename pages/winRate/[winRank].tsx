import { GetStaticPaths } from 'next';
import React from 'react';
import Layout from '../../components/layout';

//TODO 変数名修正。
type Props = {
  className?: string;
};

type Paths = {
  params: {
    winRank: string;
  };
};

const Post: React.FC<Props> = ({ className }) => {
  return (
    <Layout>
      <div className={className}>winRank</div>
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
      { params: { winRank: 'Challenger' } },
      { params: { winRank: 'Master' } },
      { params: { winRank: 'Diamond' } },
      { params: { winRank: 'Platinum' } },
      { params: { winRank: 'Gold' } },
      { params: { winRank: 'Silver' } },
      { params: { winRank: 'Bronze' } },
      { params: { winRank: 'Iron' } },
    ],
    fallback: false,
  };
};

export default Post;
