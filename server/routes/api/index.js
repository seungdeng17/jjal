const router = require('express').Router();
const controller = require('./api.controller');

// [POST] 이미지 등록 요청
router.post('/image', controller.image);

module.exports = router;
