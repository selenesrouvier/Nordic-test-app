const restclient = require('nordic/restclient')({
  timeout: 5000,
});

class ProductService {
  // por defecto ya autocompleta con la parte inicial de la URL
  //https://internal-api.mercadolibre.com/
  static getProducts(name, siteId) {
    return restclient.get(`/sites/${siteId}/search`, {
      params: {
        q: name
      }
    })
      .then(response => response.data);
  };
}
  
module.exports = ProductService;
  