//여기서, logger.js 안의 log() 함수를 쓸 수 있도록 해보자.
const logger = require('./logger.js')

logger("GET '/' 127.0.0.1");

const http = require('http');
const url = 'http://csszengarden.com';

http.get(url, (response) => {
    let chunkCount = 0;
    response.on('data', (chunk) => {
        chunkCount ++;
        console.log('----------');
        console.log(chunk.toString('utf-8'));
    });
});