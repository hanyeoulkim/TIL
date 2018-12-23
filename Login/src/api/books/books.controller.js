//books 밑의 index.js에 대한 각 라우트의 핸들러를
//여기서 정의해보자.
exports.list = (ctx) => {
    ctx.body = 'listed';
};

exports.create = (ctx) => {
    ctx.body = 'created';
};

exports.delete = (ctx) => {
    ctx.body = 'deleted';
};

exports.replace = (ctx) => {
    ctx.body = 'replaced';
};

exports.update = (ctx) => {
    ctx.body = 'updated';
};