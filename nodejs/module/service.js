//여기서 utility.js의 함수를 가져와보자.

const sum = require('./utility');
//require에서는 const를 쓸 수 밖에 없다. 이 값을 reassign 해줄 일이 없기 때문.
//const fs = require('fs');
//const express = require('express');
//const routes = require('./routes/');
//얘는 먼저 routes.js 가 있나 보고, 없으면 routes 폴더 안의 index.js를 불러오게 된다.
//const dbconfig = require('./configs/database.json');

const total = sum([100, 200, 300]);
console.log(total);
console.log(sum([1,2,3]));