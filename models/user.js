const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRETE_KEY = process.env.JWT_SECRETE_KEY

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
    { timestamps: true });

// 토큰 생성
userSchema.methods.generateToken = () => {
    const token = jwt.sign({ _id: this._id }, JWT_SECRETE_KEY);
    return token;
};

const User = mongoose.model('user', userSchema);
module.exports = User;


