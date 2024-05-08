const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

// MongoDB 연결
const mongoURI = `mongodb://localhost:27017/todo-demo`
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });


// "/" 경로에 대한 GET 요청을 처리하는 미들웨어를 추가
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Express 애플리케이션이 리스닝할 포트를 설정하고 서버를 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});