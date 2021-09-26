const router = require('express').Router();
const controller = require('./controller');

// [POST] 로그인
router.post('/login', controller.login);

// [POST] 이미지 등록 요청
router.post('/confirm-image', controller.confirmImage);

module.exports = router;
