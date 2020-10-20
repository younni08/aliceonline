import React from 'react';
import Boo from "./components/Boo";
import Mvp from "./components/mvp";
import Money from "./components/money";
import Coupon from "./components/coupon";
import Pc from "./components/pc";
import Review from "./components/review";
import './App.css';
import './mobile.css';
import './swiper-bundle.css';
import {HashRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";

const App = () => {
  const sendto = () => {
    window.open("https://pf.kakao.com/_DmMVxb/chat")
  }
  return (
    <div className="app">
      <Router>
        <div className="header_wrapper">
            <div className="header_left">
              <Link to="/">
                <span>ALICE 온라인</span>
              </Link>
            </div>
            <div className="header_mid">
              <NavLink exact to="/mvp" activeClassName="navi_active" className="navi_link">
                <div>MVP 대행</div>
              </NavLink>
              <NavLink exact to="/money" activeClassName="navi_active" className="navi_link">
                <div>게임 머니</div>
              </NavLink>
              <NavLink exact to="/coupon" activeClassName="navi_active" className="navi_link">
                <div>상품권 매입</div>
              </NavLink>
              <NavLink exact to="/pc" activeClassName="navi_active" className="navi_link">
                <div>PC방 대행</div>
              </NavLink>
              <NavLink exact to="/review" activeClassName="navi_active" className="navi_link">
                <div>이용 후기</div>
              </NavLink>
            </div>
            <div className="header_right">
                <span onClick={sendto}>문의하기</span>
            </div>
        </div>
        <Switch>
          <Route exact path="/" component={Boo} />
          <Route exact path="/mvp" component={Mvp} />
          <Route exact path="/money" component={Money} />
          <Route exact path="/coupon" component={Coupon} />
          <Route exact path="/pc" component={Pc} />
          <Route exact path="/review" component={Review} />
        </Switch>
        
      </Router>
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