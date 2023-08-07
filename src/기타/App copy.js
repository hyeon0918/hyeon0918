// 함수형 컴포넌트

import { computeHeadingLevel } from "@testing-library/react";

// import Macaron from "./Macaron";
// import cakes from "./cakes.json";
// // import로 가져와야 사용할 수 있음. 자동으로 작성하지 않으면 직접 작성해야 함.

// // index.html안에 App 함수가 들어있음.
// function App() {
//   return ( 
//     <> 
//     {/* js 문법에서는 자식이 둘 이상이면 하나로 묶어주는 부모가 필요함. 물론 div로 묶어줘도 되지만, 
//     굳이 div가 필요없다면 그냥 꺽새만 적어주어도 됨. 이럴 경우 css 작성 불가 */}
//     <div className="App">"안녕하세요!!"</div>
//     {/* {블락}을 사용하는 이유는 변수를 사용하기 위해서임 */}
//     {/* map 매소드 : 배열에 있는 요소 하나하나 가져와서 새로운 작업을 한 후 그것을 새로운 배열로 만들어줌. */}
//     {cakes.map(cake => (
//       <Macaron
//         propsid = { cake.id }
//         propsname = { cake.name }
//         propsimage = { cake.images }
//       />
//     ))}
//     </>
//   );
// }

// 클래스형 컴포넌트
import React, { Component } from 'react'
import Food from "./Food";

export class App extends Component {

  constructor(props) {
    super(props);
    console.log('constructor 함수는 클래스형 컴포넌트가 생성할 때 호출됨')
  }

  componehtDidMount(){
    console.log('componentDidMount 함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수')
    // 주로 영화 데이터 api 불러오기
  }

  componentDidUpdate() {
    console.log('componentDidUpdate 함수는 화면이 새로 그려지면 즉, 업데이트 되면 실행되는 함수');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount 함수는 컴포넌트가 죽을 때 실행되는 함수');
  }

  // state 함수
  state = {
    count: 0,
    sum: 0,
    avg: 0,
  }

  // 더하기 함수
  add = () => {
    console.log('더하기');
    // state의 값을 바꾸기 위해서 setState 함수 사용해주어야 함.
    // this.setState( { count : 1 } );
    // ↓ 과정을 보기 위한 식
    // this.state.count = 1;
    this.setState( { count : this.state.count + 1 } );
    // 클릭할 때마다 숫자 변화 주기 위해서 ↑
    // setState가 실행되면 render가 실행.
  }
  
  // 빼기 함수
  minus = () => {
    console.log('빼기');
    // this.state.count = -1;
    // this.setState( { count : -1 } );
    // this.setState( { count : this.state.count - 1 } );
    // 클릭할 때마다 숫자 변화 주기 위해서 ↑

    // 한 번에 모든 값들을 바꾸려면
    this.setState(current => ( // current는 this.state
      {
        count: current.count - 1,
        sum: current.sum -2,
        avg: current.avg -3,
      }
    ))
  }

  render() {
    // 화면에 그려지는 함수
    const { count, sum, avg } = this.state; // 구조 분해 할당
    return (
      <>
        <div>App</div>
        <div>
          <h1>현재 숫자는 { count } 입니다.</h1>
          <button onClick = { this.add }> 더하기</button>
          <button onClick = { this.minus }> 빼기</button>
        </div>
        <Food />
      </>
    )
  }
}

export default App;
// export 내보내기 default App 다른 곳에서 inport불러와 사용가능