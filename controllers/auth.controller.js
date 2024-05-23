const User = require("../models/user")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const authController = {};

// 토큰으로 유저의 _id 가져오기
authController.authenticate = async (req, res, next) => {
    try {

        // 헤더에서 토큰 값 가져오기
        const tokenString = req.headers.authorization;

        // 토큰 값 체크
        if (!tokenString) {
            return res.status(401).json({ status: "fail", message: "토큰이 없습니다." });
        }

        // 토큰에서 'Bearer ' 문자열을 제거하고 실제 토큰 값을 추출
        const token = tokenString.split(' ')[1];
        // const token = tokenString.replace("Bearer ", "");

        // 토큰 디코딩
        const decodedToken = jwt.verify(token, JWT_SECRET_KEY, (error, payload) => {
            if (error) {
                throw new Error("### invalid token: " + error.message);
            }

            // 디코딩 한 값: payload
            return payload
        });

        // 디코딩된 토큰에서 유저의 _id를 추출
        const userId = decodedToken._id;

        // req에 userId 항목 추가
        req.userId = userId

        next();

    } catch (err) {
        res.status(500).json({ status: "fail", error: err, message: err.message });
    }

};

module.exports = authController;