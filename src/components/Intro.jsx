import './css/Intro.css';
import background from '../assets/images/introImage.jpg';

function Intro(){
    return(
        <div className="intro-container" style={{ backgroundImage: {background} }}>
            <h1 className="title">수어 교육 플랫폼, 손이랑</h1>
            <h2 className="subTitle">AI 기술과 함께 수어를 학습해보세요</h2>
            <button className="loginButton">login</button>
        </div>
    )
}

export default Intro;