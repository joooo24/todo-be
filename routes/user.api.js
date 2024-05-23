const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

// POST /api/users - 유저 생성
router.post('/', userController.createUser);

// POST /api/users/login - 유저 로그인
router.post('/login', userController.loginWithEmail);

// POST /api/users/me - 토큰으로 유저 값 추출 / 유저 정보 전달
router.get('/me', authController.authenticate, userController.getUserData);

module.exports = router;