import Layout from 'components/layout';
import { AuthContext } from 'components/login/authProvider';
import Building from 'components/teamBuilding/teamBuilding';
import { GetStaticPaths } from 'next';
import React, { useContext } from 'react';

type Props = {
  className?: string;
};

const Post: React.FC<Props> = () => {
  const user = useContext(AuthContext);
  return (
    <Layout page={'TeamBuilding'}>
      <Building user={user}></Building>
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
