require('dotenv').config();
//.env에서 환경변수 불러오기

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');

const port = process.env.PORT || 3001;
//port 값 따로 설정되어있지 않으면 3001을 써라! 라는 뜻

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//node의 네이티브 프로미스 사용!
// Promise 도 여러종류의 구현체가 있는데, 
// (Node v7 이전에는 공식적인 Promise 가 없었습니다.) 
// 우리가 사용하는 노드 버전에서는 자체적으로 Promise 를 내장하고 있기때문에, 
// 이것을 사용 할 수 있도록 하는 것이다.

//이제, 몽고db 연결해주자.
mongoose.connect(process.env.MONGO_URI, {
    useMongoClient: true
  }).then(
      (response) => {
          console.log('Successfully connected to mongodb');
      }
  ).catch(e => {
      console.error(e);
  });

router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
    console.log('listening to port ' + port);
});
