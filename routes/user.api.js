
const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

// POST /api/users - 새로운 회원 생성
router.post('/', userController.createUser);

module.exports = router;