const router = require('nordic/ragnar').router();
const ProductService = require('../services/products')

router.get('/', (req, res) => {

  ProductService.getProductsByName('mouse', 10, req.platform.siteId)
    .then(data => res.json(data))

})

module.exports = router;