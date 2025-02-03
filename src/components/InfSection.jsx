import '../css/InfSection.css';
import infoimg from '../assets/images/tech.jpg';

function InfSection(){
    return(
        <div className="section-container">
            <h1 className="title">  영상 학습과<br />
                AI 모션 인식 학습
            </h1>
            <img src={infoimg} alt='infImage' />
        </div>
    )
}

export default InfSection;