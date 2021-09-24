const router = require('express').Router();
const controller = require('./controller');

// [POST] 임시 이미지 목록
router.get('/temp-image', controller.tempImage);

module.exports = router;
