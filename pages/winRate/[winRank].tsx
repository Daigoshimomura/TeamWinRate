import Layout from 'components/layout';
import WinRate from 'components/winRate/winRate';
import { GetStaticPaths } from 'next';
import React from 'react';

//TODO 変数名修正。
type Props = {
  className?: string;
  page: string;
  rank: string;
};

type Paths = {
  params: {
    winRank: string;
  };
};

const Post: React.FC<Props> = ({ className, page, rank }) => {
  return (
    <Layout page={'WinRate'} rank={rank}>
      <WinRate rank={rank}></WinRate>
    </Layout>
  );
};

export const getStaticProps = async ({ params }: Paths) => {
  return {
    props: {
      page: 'WinRate',
      rank: params.winRank,
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
