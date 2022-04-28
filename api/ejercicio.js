const router = require('nordic/ragnar').router();
const products = require('./utils');

router.get('/ej1', (req, res) => {
  const { name } = req.query;
  const productsSelected = products.filter(product => {
    return product.name.toLowerCase() === name.toLowerCase() && product
  })
  res.json(productsSelected.length > 0 ? productsSelected : "Corrija los valores pasados por parámetro");
})

router.get('/ej2', (req, res) => {
  const { priceMin, priceMax } = req.query;
  const productsSelected = products.filter(product => {
    return (product.price >= parseInt(priceMin) && product.price <= parseInt(priceMax)) && product
  })
  res.json(parseInt(priceMin)< parseInt(priceMax) ? productsSelected : "Corrija los valores pasados por parámetro");
})

router.get('/ej3', (req, res) => {
  const { stock } = req.query;
  const productsSelected = products.filter(product => {
    return product.stock >= stock && product
  })
  res.json(productsSelected.length > 0 ? productsSelected : "Ninguno de sus productos tienen stock actualmente.");
})

module.exports = router;
  