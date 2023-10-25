import { PATH } from 'consts';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from 'store';
import { NotFoundPage, DashboardPage, TodosListPage, SignUpPage } from 'pages';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
          <Route path={PATH.TODOS_LIST} element={<TodosListPage />} />
          <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
          <Route path={PATH.SIGN_UP} element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
