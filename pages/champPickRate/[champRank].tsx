import Layout from 'components/champPickRate/champPickRate';
import { GetStaticPaths } from 'next';
import React from 'react';

//TODO 変数名修正。
type Props = {
  page: string;
  rank: string;
  className?: string;
};

type Paths = {
  params: {
    champRank: string;
  };
};

const Post: React.FC<Props> = ({ className, page, rank }) => {
  return (
    <Layout page={page} rank={rank}>
      <div className={className}>rank</div>
    </Layout>
  );
};

export const getStaticProps = async ({ params }: Paths) => {
  return {
    props: {
      page: 'Champ Pick Rate',
      rank: params.champRank,
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
