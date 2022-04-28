const router = require('nordic/ragnar').router();
const { supportedCurrencies } = require('./middleware');

router.get('/', supportedCurrencies, (req, res) => {
  res.json(res.locals.currencies);
})

module.exports = router;