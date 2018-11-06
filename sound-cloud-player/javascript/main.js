const inputArea = document.querySelector('.js-search');
const searchBtn = document.querySelector('.js-submit');
const playListBar = document.querySelector('#js-playlist');
playListBar.innerHTML = localStorage.getItem('playlist');
//localStorage에 저장하는 작업. setItem 맨 아래에서 해주고 여기서 getItem 해주면 끝남.

/* 1. 검색 */
let keyword;
inputArea.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        const inputValue = document.querySelector('.js-search').value;
        keyword = inputValue;
        SoundCloudAPI.getTrack(keyword);
    }
});

searchBtn.addEventListener('click', () => {
    const inputValue = document.querySelector('.js-search').value;
    keyword = inputValue;
    SoundCloudAPI.getTrack(keyword);
});

const resetBtn = document.querySelector('#js-reset');
resetBtn.addEventListener('click', () => {
    localStorage.clear();
    playListBar.innerHTML = null;
});

/* 2. SoundCloud API  사용하기 */
//오브젝트 생성 후, 함수들을 밸류로 넣어보자.
const SoundCloudAPI = {
  init: () => {
    SC.initialize({
      client_id: "cd9be64eeb32d1741c17cb39e41d254d"
    });
  },
  getTrack: inputValue => {
    // find all sounds of buskers licensed under 'creative commons share alike'
    //SDK 제공되다보니 이 방식으로 요청할 수 있다.
    SC.get("/tracks", {
      q: inputValue
    }).then(function(tracks) {
      console.log(tracks);
      SoundCloudAPI.renderTracks(tracks);
    });
  }
};
//init 나오면  SC.initialize 함수 호출하고, getTrack 나오면 get함수 실행해라 라는 뜻.

SoundCloudAPI.init();

/* 3. 카드 보여주기 */
SoundCloudAPI.renderTracks = tracks => {
    let searchResults = document.querySelector('#js-search-results');
    searchResults.innerHTML = null;
    //이렇게 해주어 결과창 초기화 해준다.
  tracks.forEach(track => {
    const card = document.createElement("div");
    card.classList.add("card");
    console.log(card);

    //카드
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image");

    //이미지
    const imageImg = document.createElement("img");
    imageImg.classList.add("image_img");

    //#########이미지가 없을 때 lorempixel에서 이미지 따오는 3가지 방법

    //1. if문의 이용
    // if (track.artwork_url === null) {
    //     imageImg.src = track.artwork_url;
    // }else {
    //     imageImg.src = 'http://lorempixel.com/200/200/abstract';
    // }

    //2. 삼항연산자의 이용. 위의 if문과 기능은 동일.
    // track.artwork_url === null //null이니?
    // ? imageImg.src = track.artwork_url //null인게 True면 얘를 실행하고
    // : imageImg.src = 'http://lorempixel.com/200/200/abstract'; //null이 아니면 얘를 실행해라!

    //3. boolean 값 이용
    imageImg.src =
      track.artwork_url || "http://lorempixel.com/200/200/abstract";

    //카드 imageDiv 영역 안에 imageImg를 차일드로 넣어주자.
    imageDiv.appendChild(imageImg);

    //Content
    const content = document.createElement("div");
    content.classList.add("content");

    const header = document.createElement("div");
    header.classList.add("header");

    const link = document.createElement("a");
    link.href = track.permalink_url;
    link.target = "_blank"; //새탭에서 띄우기
    link.innerHTML = track.title;

    //Button
    const button = document.createElement("div");
    button.classList.add("ui", "bottom", "attached", "button", "js-button");

    //button 누르면 playlist에 들어갈 수 있게 처리.
    button.addEventListener('click', (e) => {
        SoundCloudAPI.addPlaylist(track.permalink_url);
        //click 일어나면 playlist에 넣겠다.
    });

    const icon = document.createElement("i");
    icon.classList.add("add", "icon");

    const buttonText = document.createElement("span");
    buttonText.innerHTML = "Add to playList";

    //이제 다 만든 것 합체시키자
    header.appendChild(link);
    content.appendChild(header);

    button.appendChild(icon);
    button.appendChild(buttonText);

    card.appendChild(imageDiv);
    card.appendChild(content);
    card.appendChild(button);

    //카드가 완성됐으니, index.html의 js-search-results div안에 card들을 끼워넣어주자.
    const searchResults = document.querySelector("#js-search-results");
    searchResults.appendChild(card);
  });
};

/* 4. Playlist 에 추가하고 실제로 재생하기 */
SoundCloudAPI.addPlaylist = (trackURL) => {
  SC.oEmbed(trackURL, {auto_play: true})
  .then(function(embed) {
      //먼저, 넣어줄 곳을 select 해주자.
    
    const playListBox = document.createElement('div');
    playListBox.innerHTML = embed.html
    playListBar.insertBefore(playListBox, playListBar.firstChild);
    //AppendChild  쓰면, 새로 추가한 플레이리스트가 자꾸 밑으로 붙는다.
    //나는 위로 오게 하고 싶다. playListBar의 첫번째 놈 앞에 넣고 싶다! 이 때 쓰는 것이 insertBefore!
    
    //addPlaylist 할 때 마다, local storage에 저장해보자. 그러면 창 꺼도 플레이리스트 안사라진다.
    localStorage.setItem('playlist', playListBar.innerHTML);
    //playlist라고 정의하고 로컬스토리지에 저장하겠다.
    console.log(localStorage);

  });
};
