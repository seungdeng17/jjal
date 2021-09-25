const router = require('express').Router();
const controller = require('./controller');

// [POST] 등록 요청 이미지 목록
router.get('/confirm-image', controller.confirmImage);

// [DELETE] 이미지 삭제
router.delete('/delete-image', controller.deleteImage);

module.exports = router;
