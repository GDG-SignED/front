import './css/LoginPage.css';
import kakaoImg from '../assets/images/kakaoLogin.png';
import naverImg from '../assets/images/naverLogin.png';
import googleImg from '../assets/images/googleLogin.png';
import React from "react";

const LoginPage = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>
      <p className="login-subtext">원하는 소셜 로그인을 통해 다양한 기능을 만나보세요!</p>
      <hr/>
      <div className="login-buttons">
        <button className="login-btn kakao">
          <img src={kakaoImg} alt="Kakao" className="btn-icon" />
          카카오 로그인
        </button>
        <button className="login-btn naver">
          <img src={naverImg} alt="Naver" className="btn-icon" />
          네이버 로그인
        </button>
        <button className="login-btn google">
          <img src={googleImg} alt="Google" className="btn-icon" />
          Google 로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;