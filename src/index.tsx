import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { Layout } from 'components/layout';
import { createStore } from 'store'
import { App } from './App';
import { createRouter } from 'routing/createRouter';
import { createBrowserHistory } from 'history';
import { navigateTo } from 'routing/slice';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
      <Layout>
        <App />
      </Layout>
  </React.StrictMode>
);
