import "./ServiceIntro.css";
import Img1 from '../../assets/images/homeServiceImg_1.png'
import Img2 from '../../assets/images/homeServiceImg_2.png'
import Img3 from '../../assets/images/homeServiceImg_3.png'
import Img4 from '../../assets/images/homeServiceImg_4.png'


import { useNavigate } from 'react-router-dom';

const ServiceIntro = () => {
  const navigate = useNavigate();
  function gotoClass() {
    navigate('/class-main-page');
  }

  return (
    <section className="service-intro">
      <hr/>

      <p className="service-text">우리 손이랑 서비스는요</p>

      <div className="service-list">
        <div className="service-card">
          <img src={Img1} alt="학습" />
          <p className="service-card-text">쉽고 재미있는 수어 학습 🖐️</p>
        </div>
        <div className="service-card">
          <img src={Img2} alt="라이브" />
          <p className="service-card-text">실시간 수어 연습 🎥</p>
        </div>
        <div className="service-card">
          <img src={Img3} alt="community" />
          <p className="service-card-text">커뮤니티와 함께 성장 🤝</p>
        </div>
        <div className="service-card">
          <img src={Img4} alt="AI" />
          <p className="service-card-text">AI 인식 모델 🤖</p>
        </div>
      </div>

      <button className="service-button" onClick={gotoClass}>학습하기 →</button>
    </section>
  );
};

export default ServiceIntro;
