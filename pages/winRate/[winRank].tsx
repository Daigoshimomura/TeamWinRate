import Layout from 'components/layout';
import WinRate from 'components/winRate/winRate';
import { GetStaticPaths } from 'next';
import React from 'react';

// TODO 変数名修正。
type Props = {
  rank: string;
};

type Paths = {
  params: {
    winRank: string;
  };
};

const Post: React.FC<Props> = ({ rank }) => (
  <Layout page="WinRate" rank={rank}>
    <WinRate />
  </Layout>
);

export const getStaticProps = async ({ params }: Paths) => ({
  props: {
    page: 'WinRate',
    rank: params.winRank,
  },
});

export const getStaticPaths: GetStaticPaths = async () => ({
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
});

export default Post;
