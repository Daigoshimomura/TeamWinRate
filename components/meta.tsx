import Head from 'next/head';
import React from 'react';

type Props = {
  description: string;
  ogImageUrl: string;
  title: string;
};

const Meta: React.FC<Props> = ({ description, ogImageUrl, title }) => (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta title={title} />
      <meta name="description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
    </Head>
  );

export default Meta;
