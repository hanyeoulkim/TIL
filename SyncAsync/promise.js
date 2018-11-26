const promise = new Promise((resolve, reject) => {
    resolve("Han success!");
    reject(new Error('Unhappy Error...'));
});

promise
    .then(result => console.log('성공!', result))
    .catch(error => console.error('실패 ㅠㅠ', error));