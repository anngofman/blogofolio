import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextComponent from './helpers/ThemeContext';
import MenuContextProvider from './helpers/MenuContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextComponent>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </ThemeContextComponent>
  </React.StrictMode>
);


reportWebVitals();
