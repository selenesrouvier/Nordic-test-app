/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const config = require('nordic/config');
const { layoutMiddleware } = require('nordic/layout');
const i18nMiddleware = require('nordic/i18n/middleware');
const polyfillsMiddleware = require('nordic/script/polyfills-middleware');

/**
 * Set up mocks
 */
require('../../mocks');

/**
 * Routers
 */
const demoRoute = require('../pages/demo');
const demoWithPageRoute = require('../pages/demoWithPage');
const products = require('../pages/products');
const search = require('../pages/search');

/**
 * Use global middlewares
 */
router.use(layoutMiddleware());
router.use(i18nMiddleware(config.i18n));
router.use(polyfillsMiddleware(config.polyfillLimits));

/**
 * Redirect
 */
router.get('/', (req, res) => res.redirect(`${config.ragnar.basePath}demo`));

/**
 * Mount routers
 */
router.use('/demo', demoRoute);
router.use('/demoWithPage', demoWithPageRoute);
router.use('/products', products);
router.use('/search', search);

/**
 * Expose router
 */
module.exports = router;
