import React from 'react';
// react을 가져와서 React 이름으로 사용하겠다.
import ReactDOM from 'react-dom/client';
// react-dom 모듈에서 ReactDOM으로 사용하겠다.
import App from './App';
// scr폴더의 App.js를 가져와 APP이름으로 사용하겠다.

const root = ReactDOM.createRoot(document.getElementById('root'));
// index.html의 div id="root" 가 root가 됨
root.render(
  <React.StrictMode>
    <App /> 
    {/* App 컴포넌트를 사용하겠다. */}
  </React.StrictMode>
);
