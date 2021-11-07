import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Route from "./router";
import "./index.scss";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import tr from "./translations/tr.json";
import uk from "./translations/uk.json";
import ru from "./translations/ru.json";
import en from "./translations/en.json";

i18next.use(LanguageDetector).init({
  interpolation: { escapeValue: false },
  // lng: "tr",
  fallbackLng: "tr",
  // debug: true,
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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <Route component={Route} />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
