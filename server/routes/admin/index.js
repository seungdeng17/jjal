const router = require('express').Router();
const controller = require('./controller');
const middleware = require('./middleware');

// [PUT] 어드민 로그인
router.put('/login', controller.login);

// [POST] 임시 이미지 목록
router.use('/temp-image', middleware);
router.get('/temp-image', controller.tempImage);

module.exports = router;
