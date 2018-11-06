/* 1. 검색 */

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
SoundCloudAPI.getTrack('busker');

/* 3. 카드 보여주기 */
SoundCloudAPI.renderTracks = tracks => {
  tracks.forEach((track) => {

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
    imageImg.src = (track.artwork_url || 'http://lorempixel.com/200/200/abstract');

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
