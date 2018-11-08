console.log("1번만 출력되는 중임.");


module.exports = function(numbersToSum=[]) {
//numbersToSum 자리에 값을 사용자가 넣으면 그걸 사용하고, 아니면 배열로 초기화시키겠다.
let sum = 0;
numbersToSum.forEach(number => sum += number);
return sum;   
};

console.log('진짜로.');