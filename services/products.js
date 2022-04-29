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
      .then(response => response.data);
  };
}

module.exports = ProductService;
