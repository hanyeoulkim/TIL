const os = require('os');

const totalMemory = os.totalmem() / 1024 / 1024 / 1024;
const freeMemory = os.freemem() / 1024 / 1024; //mb로 보여주기 위해서

console.log("Total Memory : " + totalMemory + "gb");
console.log(`Free Memory : ${freeMemory}mb`);