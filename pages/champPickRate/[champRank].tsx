import { ChampPickRate } from 'components/champPickRate/champPickRate';
import Layout from 'components/layout';
import { GetStaticPaths } from 'next';
import React from 'react';

// TODO 変数名修正。
type Props = {
  rank: string;
};

type Paths = {
  params: {
    champRank: string;
  };
};

const Post: React.FC<Props> = ({ rank }) => (
    <Layout page="Champ Pick Rate" rank={rank}>
      <ChampPickRate />
    </Layout>
  );

export const getStaticProps = async ({ params }: Paths) => ({
    props: {
      page: 'Champ Pick Rate',
      rank: params.champRank,
    },
  });

export const getStaticPaths: GetStaticPaths = async () => ({
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
  });

export default Post;
