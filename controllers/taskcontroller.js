const Task = require('./../models/task');

const taskController = {};

// 할일 목록을 조회
taskController.getTask = async (req, res) => {
    try {
        // 데이터베이스에서 모든 할일을 조회
        const taskList = await Task.find({}).select("-__v");
        res.status(200).json({ status: "ok", data: taskList })

    } catch (err) {
        res.status(500).json({ status: "fail", error: err, message: err.message });
    }
};

// 새로운 할일을 생성
taskController.createTask = async (req, res) => {
    // 클라이언트로부터 받은 요청의 데이터를 이용하여 새로운 할일 객체를 생성
    const task = new Task({
        task: req.body.task, // 할일 내용을 할일 객체의 task 속성에 설정
        isComplete: req.body.isComplete || false // 완료 여부를 할일 객체의 isComplete 속성에 설정
    });

    try {
        // 새로운 할일을 데이터베이스에 저장하고, 그 결과를 newTask 변수에 저장
        const newTask = await task.save();
        res.status(201).json({ status: "ok", data: newTask });
    } catch (err) {
        res.status(500).json({ status: "fail", error: err, message: err.message });
    }
};

// 특정 할일을 수정
taskController.updateTask = async (req, res) => {
    try {
        // 요청 파라미터에 해당하는 특정 할일을 찾아서 업데이트하고, 업데이트된 할일 객체를 반환
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ status: "ok", data: updatedTask });

    } catch (err) {
        res.status(500).json({ status: "fail", error: err, message: err.message });
    }
};


// 특정 할일을 삭제
taskController.deleteTask = async (req, res) => {
    try {
        // 요청 파라미터에 해당하는 특정 할일을 찾아서 삭제
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ status: "ok", message: 'Task deleted' })

    } catch (err) {
        res.status(500).json({ status: "fail", error: err, message: err.message });
    }
};

// 모든 할일을 삭제
taskController.deleteTaskAll = async (req, res) => {
    try {
        // 모든 할일을 찾아서 삭제
        await Task.deleteMany({});
        res.status(200).json({ status: "ok", message: 'Task All deleted' })

    } catch (err) {
        res.status(500).json({ status: "fail", error: err, message: err.message });
    }
};

module.exports = taskController;
