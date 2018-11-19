console.log('메인코드 진행중!');
const user = getUser(2);
console.log('메인코드 계속 진행중!');


function getUser(id, callback){
    console.log(`Finding user with id < ${id} > in DB`);
    const users = [
        { id: 1, githubID: 'neo'},
        { id: 2, githubID: 'han'},
    ];

    setTimeout(() => {
        const user = users.find((user) => {
            return user.id === id;
        });
        callback(user);
    }, 2000);
}