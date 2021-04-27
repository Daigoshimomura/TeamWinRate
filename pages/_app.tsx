import { AppProps } from 'next/app';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { createGlobalStyle } from 'styled-components';
import 'ress';

const GlobalStyle = createGlobalStyle`
  *:not(svg) > * {
    font-family: 'Noto Sans JP', sans-serif;
    color: auto;
  }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyle />
      <Component {...pageProps} />
    </DndProvider>
  );
}
