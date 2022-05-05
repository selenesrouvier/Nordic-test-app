/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const demo = require('./demo');
const products = require('./products');
const { showUrl } = require('./middleware');
const currences = require('./currencies');
const ejercicio = require('./ejercicio');
const search = require('./search');

/**
 * Demo router
 */
router.use('/', showUrl);
router.use('/demo', demo);
router.use('/products', products);
router.use('/currencies', currences);
router.use('/ejercicio', ejercicio);
router.use('/search', search);

/**
 * Expose API router
 */
module.exports = router;
