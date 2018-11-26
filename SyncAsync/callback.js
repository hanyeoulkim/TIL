console.log('메인코드 진행중!');
getUser(2, (user) => {
    console.log(user);
    getRepos(user.githubID, (repos) => {
        console.log(repos);
    });
});
console.log('메인코드 계속 진행중!');


function getUser(id, callback) {
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

function getRepos(userID, callback) {
    console.log(`Finding [${userID}]'s all github repos...`)
    setTimeout(() => {
        callback(['TIL', 'ES6', 'Express-demo']);
    }, 1000); 
}

