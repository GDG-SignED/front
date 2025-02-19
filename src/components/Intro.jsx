import './css/Intro.css';
import { Navigate, useNavigate } from 'react-router-dom';

function Intro(){
  const navigate = useNavigate();
  function gotoLogin() {
    navigate('/login-page');
  }
  
    return(
        <div className="intro-container">
            <h1 className="title">수어 교육 플랫폼, 손이랑</h1>
            <h2 className="subTitle">AI 기술과 함께 수어를 학습해보세요</h2>
            <button className="loginButton" onClick={gotoLogin}>login</button>
        </div>
    )
}

export default Intro;