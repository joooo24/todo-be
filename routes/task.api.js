const express = require('express');
const router = express.Router();
const taskController = require('./../controllers/task.controller');
const authController = require('../controllers/auth.controller');

// GET /api/tasks - 모든 할일 조회
router.get('/', taskController.getTask);

// POST /api/tasks - 유저 체크 후 -> 새로운 할일 생성
router.post('/', authController.authenticate, taskController.createTask);

// PUT /api/tasks/:id - 특정 할일 수정
router.put('/:id', taskController.updateTask);

// DELETE /api/tasks/:id - 특정 할일 삭제
router.delete('/:id', taskController.deleteTask);

module.exports = router;

// router.get('/', (req, res) => {
//     res.send('GET /api/tasks');
// });

// router.post('/', (req, res) => {
//     res.send('POST /api/tasks');
// });

// router.put('/:id', (req, res) => {
//     res.send(`PUT /api/tasks/`);
// });

// router.delete('/:id', (req, res) => {
//     res.send(`DELETE /api/tasks/`);
// });
