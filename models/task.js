const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
        required: true
    },
    author: {
        // 스키마 타입 중 ObjectId만 가져오기
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // 참조 외래키 (참조하는 스키마)
        ref: "User"
    },
},
    { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
