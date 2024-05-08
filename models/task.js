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
},
    { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
