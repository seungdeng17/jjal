const router = require('express').Router();
const controller = require('./controller');

// [POST] 등록 요청 이미지 목록
router.get('/confirm-image', controller.confirmImage);

module.exports = router;
