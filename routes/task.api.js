const express = require('express');
const router = express.Router();

// GET /api/tasks
router.get('/', (req, res) => {
    // 할일 목록을 조회
    res.send('GET /api/tasks');
});

// POST /api/tasks
router.post('/', (req, res) => {
    // 새로운 할일을 생성
    res.send('POST /api/tasks');
});

// PUT /api/tasks/:id
router.put('/:id', (req, res) => {
    // 특정 할일을 수정
    res.send(`PUT /api/tasks/`);
});

// DELETE /api/tasks/:id
router.delete('/:id', (req, res) => {
    // 특정 할일을 삭제
    res.send(`DELETE /api/tasks/`);
});

module.exports = router;