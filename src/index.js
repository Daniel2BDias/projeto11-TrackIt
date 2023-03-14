import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyles/GlobalStyles';
import ResetStyle from './GlobalStyles/ResetStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
