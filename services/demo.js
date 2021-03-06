/**
 * Modules dependencies
 */
const restclient = require('nordic/restclient')({
  timeout: 5000,
});

/**
 * Service interface
 */
class Service {
  // por defecto ya autocompleta con la parte inicial de la URL
  //https://internal-api.mercadolibre.com/
  static getSite(siteId) {
    return restclient.get(`/sites/${siteId}`)
      .then(response => response.data);
  };
}

/**
 * Expose Service
 */
module.exports = Service;
