import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from 'store'
import { Provider } from 'react-redux'
import { Layout } from 'pages/layout';
import { RouterProvider } from 'react-router';
import { ReactRoutes } from 'routing';
import { createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createBrowserRouter(ReactRoutes);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Provider>
  </React.StrictMode>
);
