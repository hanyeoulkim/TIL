const mongoose = require('mongoose');
const { Schema } = mongoose;

const Author = new Schema({
    name: String,
    email: String
});

const Book = new Schema({
    title: String,
    authors: [Author],
    publishedDate: Date,
    price: Number,
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now //기본값은 현재 날짜
    }
});

// 우리가 만든 스키마를 모델로 변환하고 다른 파일에서 불러와서 사용 할 수 있도록 내보내주는 것이 mongoose.model
module.exports = mongoose.model('Book', Book);