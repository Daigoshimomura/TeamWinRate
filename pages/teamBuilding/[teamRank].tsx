import { GetStaticPaths } from 'next';
import React from 'react';
import Layout from '../../components/layout';

//TODO 変数名修正。
type Props = {
  className?: string;
};

type Paths = {
  params: {
    teamRank: string;
  };
};

const Post: React.FC<Props> = ({ className }) => {
  return (
    <Layout>
      <div className={className}>teamRank</div>
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
      { params: { teamRank: 'Challenger' } },
      { params: { teamRank: 'Master' } },
      { params: { teamRank: 'Diamond' } },
      { params: { teamRank: 'Platinum' } },
      { params: { teamRank: 'Gold' } },
      { params: { teamRank: 'Silver' } },
      { params: { teamRank: 'Bronze' } },
      { params: { teamRank: 'Iron' } },
    ],
    fallback: false,
  };
};

export default Post;
