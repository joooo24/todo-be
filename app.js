const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRounter = require("./routes/index");
const Task = require('./models/task');
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD
console.log("MONGODB_URI_PROD",MONGODB_URI_PROD)

// bodyParser, indexRounter 사용
const app = express();
app.use(bodyParser.json());
app.use("/api", indexRounter);

// MongoDB 연결
const mongoURI = MONGODB_URI_PROD
mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connected');

        // // test:
        // // 새로운 할일 생성
        // const newTask = new Task({
        //     task: '새로운 할일3 생성', // 새로운 할일의 내용
        //     isComplete: false // 완료 여부 설정 (기본값: false)
        // });

        // // 할일 저장
        // return newTask.save() // 새로운 할일을 데이터베이스에 저장하고 Promise 반환
        //     .then((savedTask) => { // 저장된 할일 정보를 받아서 처리하는 부분
        //         console.log('새로운 할일 저장되었습니다.');
        //         console.log(savedTask);

        //         // 저장된 할일 검색
        //         return Task.find({}).select("-__v"); // 저장된 모든 할일을 검색하고 Promise 반환
        //     })
        //     .then((tasks) => { // 검색된 할일 목록을 받아서 처리하는 부분
        //         console.log('저장된 할일 목록:');
        //         console.log(tasks);
        //     });
    })


    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });


// "/" 경로에 대한 GET 요청을 처리하는 미들웨어를 추가
app.get('/', (req, res) => {
    res.send('Hello, world!'); // 브라우저에서 루트 URL에 접속하면 'Hello, world!' 텍스트를 반환
});

// Express 애플리케이션이 리스닝할 포트를 설정하고 서버를 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});