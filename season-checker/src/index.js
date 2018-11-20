import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import Denied from "./Denied";

// const App = () => {

//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         error => console.error(error)
//     )

//     return(
//         <div>
//             <SeasonDisplay />
//         </div>
//     )
// }

class App extends React.Component {
  //상속받고 있는 Component 함수를 그대로 쓰겠다. 라는 뜻. 클래스를 쓴다면 이 컨스트럭터는 무조건 쓰는 구문이므로 외우자.
  //   constructor(props) {
  //     super(props);
  //   }
  //데이터의 초기화

  state = {
    lat: null,
    errorMessage: ""
  };

  renderContent() {
    //사용자 차단 시
    if (this.state.errorMessage && !this.state.lat) {
      return <Denied message="We cannot approach to you bcuz you denied permission." />;
    }
    //사용자 허용 시
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    //아무것도 안눌렀을 시
    return <Spinner message="Where are you?" />;
  }

  render() {
      return (
          <div>
              {this.renderContent()}
          </div>
      )
  }

  componentDidMount() {
    console.log("컴포넌트납시오");
    //얘를 여기로 옮긴 이유는, 처음 한번만 시행되도록 하기 위함이다.
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("컴포넌트 UPDATED & RE-RENDERED");
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
