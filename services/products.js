const {normalizer} = require('./transforms/normalizer');

const restclient = require('nordic/restclient')({
  timeout: 5000,
});

class ProductService {
  static getProductsByName(name, limit, siteId) {
    return restclient.get(`/sites/${siteId}/search`, {
      params: {
        q: name,
        limit: limit,
      }
    })
      .then(response => normalizer(response.data.results))
  };
}

module.exports = ProductService;
