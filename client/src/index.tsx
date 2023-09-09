import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store'
import App from './App';
import { Provider } from 'react-redux'
import Layout from './pages/layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </React.StrictMode>
);
