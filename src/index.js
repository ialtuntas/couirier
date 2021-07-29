import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import tr from "./translations/tr.json";
import uk from "./translations/uk.json";
import ru from "./translations/ru.json";
import en from "./translations/en.json";
i18next.init({
  interpolation: { escapeValue: false },
  lng: "tr",
  resources: {
    uk: {
      common: uk,
    },
    tr: {
      common: tr,
    },
    en: {
      common: en,
    },
    ru: {
      common: ru,
    },
  },
});
i18next.init({
  interpolation: { escapeValue: false },
});
ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);
