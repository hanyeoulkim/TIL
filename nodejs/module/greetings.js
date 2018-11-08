//함수를 외부로 내보내는 2가지 방법.
module.exports = {
    sayHelloInKor(){
        return '안농';
    },
    sayHelloInEng(){
        return 'GoodDay!';
    },
    sayHelloInSpanish(){
        return 'Hola!';
    }
};

//2. 이렇게도 가능.
// exports.sayHelloInKor = () => {
//     return '안농';
// };

// exports.sayHelloInEng = () => {
//     return 'GoodDay!';
// };

// exports.sayHelloInSpanish = () => {
//     return 'Hola!';
// };

