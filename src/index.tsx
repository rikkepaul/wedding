import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from '../utils/firebase';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_no from "./translations/no/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'no',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      no: {
          common: common_no
      },
  },
});
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
