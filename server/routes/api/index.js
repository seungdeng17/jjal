const router = require('express').Router();
const controller = require('./api.controller');

// [POST] 임시 이미지 등록 요청
router.post('/temp-image', controller.tempImage);

module.exports = router;
