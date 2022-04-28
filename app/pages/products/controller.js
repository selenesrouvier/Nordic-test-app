const React = require('react');
const View = require('./view');
const productService = require('../../../services/products');

exports.fetchProductsData = function fetchProductsData(req, res, next) {
  
  productService.getProducts('iphone', req.platform.siteId)
    .then(data => {
      //console.log(data)
      res.locals.products = data;
      next();
    })
    .catch(err => next(err));

};

exports.render = function render(req, res) {

  const ProductsView = props => <View {...props} />

  res.render(ProductsView, {
    title: 'page de productos', 
    products: res.locals.products,
  })

}