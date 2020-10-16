import React from 'react';
import Header from "./components/header";
import Boo from "./components/Boo"
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Boo />
      <div className="footer">
        <div className="footer_level1">
          <span>이용약관</span>
          <span>개인정보처리방법</span>
        </div>
        <div className="footer_level2">
          <span>Copyright @ 2020 All rights reserved</span>
        </div>
      </div>
    </div>
  )
}

export default App;