require('../pages/products/styles.scss');

const React = require('react');
// el hydrate sirve para rehidratar la view, osea actualizar la info con la interaccion del usuario
const hydrate = require('nordic/hydrate');
const I18n = require('nordic/i18n');
const I18nProvider = require('nordic/i18n/I18nProvider');
const ProductsView = require('../pages/products/view');

const {
  translations,
  products
} = window.__PRELOADED_STATE__;

const i18n = new I18n({ translations });

hydrate(
  <I18nProvider i18n={i18n}>
    <ProductsView products={products}/>
  </I18nProvider>
,
  document.getElementById('root-app'),
);