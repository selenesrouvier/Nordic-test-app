const router = require('nordic/ragnar').router();
const { fetchProductsData, render } = require('./controller');

router.get('/', fetchProductsData, render);

module.exports = router;
