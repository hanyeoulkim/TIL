console.log('메인코드 진행중!');
const user = getUser(1);
console.log(user);
console.log('메인코드 계속 진행중!');


function getUser(id){
    const users = [
        { id: 1, githubID: 'neo'},
        { id: 2, githubID: 'han'},
    ];
    setTimeout(() => {
        console.log('Reading Data from DB...');
    }, 2000);
}