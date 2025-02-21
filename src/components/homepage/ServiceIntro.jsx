import "./ServiceIntro.css";
import Img1 from '../../assets/images/homeServiceImg_1.png'
import Img2 from '../../assets/images/homeServiceImg_2.png'
import Img3 from '../../assets/images/homeServiceImg_3.png'
import Img4 from '../../assets/images/homeServiceImg_4.png'

const ServiceIntro = () => {
  return (
    <section className="service-intro">
      <h2>우리 손이랑 서비스는요</h2>
      <div className="service-list">
        <div className="service-card">
          <img src={Img1} alt="학습" />
          <p>쉽고 재미있는 수어 학습</p>
        </div>
        <div className="service-card">
          <img src={Img2} alt="라이브" />
          <p>실시간 수어 연습</p>
        </div>
        <div className="service-card">
          <img src={Img3} alt="community" />
          <p>커뮤니티와 함께 성장</p>
        </div>
        <div className="service-card">
          <img src={Img4} alt="AI" />
          <p>AI 인식 모델 🤖</p>
        </div>
      </div>
      <button className="service-button">학습하기 →</button>
    </section>
  );
};

export default ServiceIntro;
