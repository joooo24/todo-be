const User = require("./../models/user")
const bcrypt = require('bcryptjs');

const userController = {};

// 유저 생성
userController.createUser = async (req, res) => {
    try {
        const { email, name, password } = req.body;

        // 이메일 중복검사 및 빈 값 체크
        const user = await User.findOne({ email });
        if (user) {
            throw new Error("이미 가입이 된 유저입니다")
        } else if (!email) {
            throw new Error("입력된 이메일이 없습니다")
        } else if (!password) {
            throw new Error("입력된 비밀번호가 없습니다")
        } else if (!name) {
            throw new Error("입력된 이름이 없습니다")
        }

        // 비밀번호 암호화
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        // 유저 생성
        const newUser = new User({ email, name, password: hash })
        await newUser.save();
        console.log("### newUser", newUser)

        res.status(200).json({ status: "success" })

    } catch (err) {
        res.status(500).json({ status: "fail", error: err, message: err.message });
    }
};

module.exports = userController;