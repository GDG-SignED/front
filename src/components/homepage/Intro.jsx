import './Intro.css';
import Logo from '../../assets/images/logo.png';
import { Navigate, useNavigate } from 'react-router-dom';

function Intro(){
  const navigate = useNavigate();
  function gotoLogin() {
    navigate('/login-page');
  }
  
  return(
    <section className="home-intro">
      <img src={Logo} alt="손이랑 로고" className="home-logo" />
      <p className="home-subtitle">손이랑과 함께 오늘도 수어를 배워보아요</p>
    </section>
  )
}

export default Intro;