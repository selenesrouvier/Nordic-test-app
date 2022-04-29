const React = require('react');
const View = require('./view');
const ProductService = require('../../../services/products')
const I18nProvider = require('nordic/i18n/I18nProvider');

exports.fetchProductsData = fetchProductsData = (req, res, next) => {
  ProductService.getProductsByName('Iphone', 10, req.platform.siteId)
    .then(data => {
      res.locals.products = data;
      next();
    })
    .catch(err => next(err));
};

exports.render =  render = (req, res) => {
  const Products = props => {
    return (
      <I18nProvider i18n={req.i18n}>
        <View {...props} />
      </I18nProvider>
    )
  }
  res.render(Products, { 
    products: res.locals.products.results,
    translations: req.translations,
  })
}