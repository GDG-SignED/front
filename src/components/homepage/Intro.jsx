import './Intro.css';
import Logo from '../../assets/images/homeLogo.png';
import { Navigate, useNavigate } from 'react-router-dom';

function Intro(){
  const navigate = useNavigate();
  function gotoLogin() {
    navigate('/login-page');
  }
  
  return(
    <section className="intro-section">
      <div className="intro-content">
        <img src={Logo} alt="손이랑 로고" className="intro-logo" />
        <p className="intro-subtitle">손이랑과 함께 오늘도 수어를 배워보아요</p>
      </div>

      {/* 로그인 후
      <div className="home-user-info">
        <p className="username">(닉네임) 님 🌱</p>
        <p className="actions">마이페이지 | 로그아웃</p>
      </div> */}
      
      <button className="home-login-button" onClick={gotoLogin}>로그인/회원가입 →</button>
    </section>
  )
}

export default Intro;