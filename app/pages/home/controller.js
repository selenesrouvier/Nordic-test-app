const React = require('react');
const View = require('./view');
const config = require('nordic/config');
const ProductService = require('../../../services/products')
const ImageProvider = require('nordic/image/provider');
const I18nProvider = require('nordic/i18n/I18nProvider');

exports.fetchProductsData = fetchProductsData = (req, res, next) => {
  ProductService.getProductsByName('Mouse', 4, req.platform.siteId)
    .then(data => {
      res.locals.products = data;
      next();
    })
    .catch(err => next(err));
};

exports.render =  render = (req, res) => {

  const imagesPrefix = config.assets.prefix;

  const Home = props => {
    return (
      <I18nProvider i18n={req.i18n}>
        <ImageProvider prefix={imagesPrefix}>
          <View {...props} />
        </ImageProvider>
      </I18nProvider>
    )
  }
  res.render(Home, { 
    products: res.locals.products,
    translations: req.translations,
    imagesPrefix
  })
}