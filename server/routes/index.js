const router = require('express').Router();

const api = require('./api');
const admin = require('./admin');

router.use('/', api);
router.use('/admin', admin);

module.exports = router;
