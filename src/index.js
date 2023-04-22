import logo from './logo.svg';
import './App.css';

import React from 'react';
import App from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from './Layout';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Layout>
        <App />
      </Layout>
    </ApolloProvider>
  </StrictMode>
);
