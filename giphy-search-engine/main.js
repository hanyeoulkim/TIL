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
const apiKey = 'RwcZAWb7yDl7cxu0A0YZqVtS7NbTgiTK';
//날 증명하는 것. 나 이런 사람이에요! 정보 요청할 자격이 있어요!
let keyword = 'fuckedup';
const url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apiKey}`;

//Ajax request
//요청을 비동기로 보내보자.
const GiphyAjaxCall = new XMLHttpRequest();
GiphyAjaxCall.open('GET', url);
//야, 주소를 열어서 get으로 url열고
GiphyAjaxCall.send();
//요청을 보내.
GiphyAjaxCall.addEventListener('load', (e) => {
    const rawData = e.target.response;
    //console.log(rawData);
    //자, rawData는 아직 브라우저가 처리를 못한다. 얘를 처리할 수 있게 처리해보자.
    //console.log(JSON.parse(rawData));
    const parsedData = JSON.parse(rawData)
    pushToDom(parsedData);

});
//응답으로 load가 완료되었을 때 

// 3. GIF 파일들을 index.html 에 밀어 넣는다.
const pushToDom = (parsedData) => {
    const resultArea = document.querySelector('#result-area');

    console.log(parsedData.data[0].images.fixed_height.url);
    const DataSet = parsedData.data;
    DataSet.forEach((imageData) => {
        let imgURL = imageData.images.fixed_height.url;
        let alt = imageData.title;
        resultArea.innerHTML += `<img src="${imgURL}" alt='${alt}' />`;
    });
    //console.log(resultArea)
    

}
