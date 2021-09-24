const router = require('express').Router();
const controller = require('./controller');
const { adminLoginMiddleware, adminMiddleware } = require('./middleware');

// [POST] 어드민 로그인
router.use('/login', adminLoginMiddleware);
router.post('/login', controller.login);

// [POST] 어드민 로그아웃
router.use('/logout', adminLoginMiddleware);
router.post('/logout', controller.logout);

// [POST] 임시 이미지 목록
router.use('/temp-image', adminMiddleware);
router.get('/temp-image', controller.tempImage);

module.exports = router;
