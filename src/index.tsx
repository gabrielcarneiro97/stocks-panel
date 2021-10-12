import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider as StoreProvider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import theme from 'Theme';
import App from 'App';
import store from 'store';
import reportWebVitals from 'reportWebVitals';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
  }

  :root {
    --toastify-color-success: ${(props) => props.theme.colors.success};
    --toastify-color-warning: ${(props) => props.theme.colors.secondary};
    --toastify-color-error: ${(props) => props.theme.colors.danger};
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
