// 1. <input> 태그 안의 값을 잡는다.

const button = document.querySelector('#js-button');
const inputArea = document.querySelector('#input-area');

//button 클릭했을 때 일어나는 일. 밑의 인풋 밸류를 보여주자.
button.addEventListener('click', ()=>{
    const inputValue = document.querySelector('#js-input').value;
    //value는 input에만 나온다.
    pushToDom(inputValue); //input밸류 안의 값을 여기에 넣겠다.
});

//엔터키를 눌렀다 떼면! search 되게 할 것.
inputArea.addEventListener('keyup', (e)=>{
    const inputValue = document.querySelector('#js-input').value;
    //console.log(e);
    //enter 키코드는 13
    if(e.keyCode === 13){
        pushToDom(inputValue);
    }

});
//keyup -  키보드가 눌렀다 떼질때
//keydown - 키보드가 눌렸을때
//keypress - 키보드 눌렸다 떼질때


// 2. API 를 활용해 data 를 받는다. 그리고 가공한다.

// 3. GIF 파일들을 index.html 에 밀어 넣는다.
const pushToDom = (data) => {
    const resultArea = document.querySelector('#result-area');
    resultArea.innerHTML = data;
    console.log(resultArea)
}
