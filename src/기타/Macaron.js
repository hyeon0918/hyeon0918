// Macaron.js
// App 컴포넌트 안에 넣어주어야 함.
/*
// rce 입력 후 엔터 - 클래스형 컴포넌트 제작 단축키 : html5 같은 / 가장 큰 차이점은 render가 있음.
import React, { Component } from 'react'
// react 모듈에서 React와 Component를 가져오겠다.
// 세부적으로 가져올 때는 중괄호로 묶어줌.

// 아래 export 생략가능
export class Macaron extends Component {
// 만든 클래스 Macaron은 react에서 만든 클래스 Component의 기능을 상속받음. 이 기능을 확장해서 사용 
// 모두 다 기능을 상속받는 것은 아님. 다른 과목을 배우면 자세히 알 수 있음.
  render() {
   // 화면에 그려지는 내용
    return (
      <div>Macaron</div>
    )
  }
}

export default Macaron
// 내보내기
*/

// 함수형 컴포넌트
// rfce 작성 후 엔터 React Function Export component
import React from 'react'
/* 첫 번째 방법
function Macaron(props) {
   console.log(props);
  return (
    <div>
      <h1>No. { props.propsid }</h1>
      <h2>Name : { props.propsname }</h2>
      <img src={ props.propsimage } alt={ props.propsname } width={ 200 } height={ 200 } />
    </div>
  )
};
*/

/* 두 번째 방법 - 구조 분해 할당
function Macaron(props) {
  console.log(props);
  const { propsname, propsid, propsimage } = props; // 구조 분해 할당
  // 속성을 분해할 수 있음. 이 경우 속성만 지정해주면 속성값이 나옴.
 return (
   <div>
     <h1>No. { propsid }</h1>
     <h2>Name : { propsname }</h2>
     <img src={ propsimage } alt={ propsname } width={ 200 } height={ 200 } />
   </div>
 )
};
*/

function Macaron({propsname, propsid, propsimage}) { // 구조 분해 할당
  // 애초에 객체형태로 받는 것이 아니라 구조분해할당 형식으로 입력. 가장 많이 사용되는 방법
 return (
   <div>
     <h1>No. { propsid }</h1>
     <h2>Name : { propsname }</h2>
     <img src={ propsimage } alt={ propsname } width={ 200 } height={ 200 } />
   </div>
 )
};


export default Macaron
