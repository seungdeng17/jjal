const router = require('express').Router();

const api = require('./api');
const admin = require('./admin');
const adminMiddleware = require('./admin/middleware');

router.use('/', api);

router.use('/admin', adminMiddleware);
router.use('/admin', admin);

module.exports = router;
