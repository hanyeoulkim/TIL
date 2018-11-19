// 1. React와 ReactDOM 라이브러리 import
//require은 먼저 불러와지는 것 부터 부른다.
//import는 순차적으로 불러온다. 비동기 방식으로, react에선 import를 주로 쓸 것이다.

import React from 'react';

import ReactDOM from 'react-dom';

// 2. react 컴포넌트 생성
//1) html 생성 // app 이라는 component 생성해보자.
//먼저, 함수형으로 만들어보자. jsx 형식으로 만들어본 것이다.
//jsx에서는 js 주려면 {} 로 오브젝트 형식으로 준다. background-color같은 경우 -연산을 해주려 하기 때문에 backgroundColor 으로 바꿔준다.
//모든 string은 ''쓰는데, js를 위한 string은 전부 ""를 써주기로 한다. 그게 관습임.

const App = () => {
    //const buttonText = [10, 20];
    const buttonText = {happy:'hanyeoul'};
    //현재시각을 찍어보자.
    function getTime() {
        return (new Date()).toLocaleTimeString();
    }
    return (
        <div>
            <h3>{getTime()}</h3>
            <label htmlFor="name" className="name_label">Enter name: </label>
            <input type="text" id="name" />
            <button style={{backgroundColor: 'blue', color: 'white', border: 'solid 1px black'}}>
            {buttonText.happy}
            </button>
        </div>
    )
}


//2) event handling



// 3. 화면에 html 띄우기
ReactDOM.render(
    <App />, //jsx 형식으로 함수 불러와주기.
    document.querySelector('#root')
)

