
const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

// POST /api/users - 유저 생성
router.post('/', userController.createUser);

// POST /api/users - 유저 로그인
router.post('/login', userController.loginWithEmail);

module.exports = router;